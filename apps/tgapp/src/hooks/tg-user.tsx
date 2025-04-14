"use client"
import { TrustifyAccount } from '@/interfaces/trustify';
import { getSHA256Hash, toEOSIOSha256 } from '@/utils/hash.utils';
import WebApp from '@twa-dev/sdk';
import { WebAppUser} from '@twa-dev/types';
import { useState, useEffect, useCallback } from 'react';
import { useXPRN } from 'xprnkit';

const useAppUser = () => {
  const [telegramUser, setTelegramUser] = useState<WebAppUser>();
  const [trustifyUser, setTrustifyUser] = useState<TrustifyAccount>();
  const {rpc} = useXPRN()
  useEffect(() => {

    if (!window) return 
    console.log('checked window ...')
      if (WebApp.initDataUnsafe && WebApp.initDataUnsafe.user) {
        WebApp.expand();
        setTelegramUser(WebApp.initDataUnsafe.user);
      } else {
        const mockedUser = {
          first_name: "Rockerone",
          id: 600190930,
          language_code: "fr",
          last_name: "@XPRNetwork (DONT DM ME)",
          photo_url:
            "https://t.me/i/userpic/320/n1EagZ7JFy8mSrdGAWdxwJx5JM_txHjHcA5TSceQMCo.svg",
          username: "rockerzOne",
        };
        console.log(mockedUser)
        setTelegramUser(mockedUser);
      }
    
  }, [setTelegramUser]);

  const fetchTrustifyUser = useCallback(async () => {
    
    if (!telegramUser || !telegramUser.id) {
      console.log('no user data')
      return
    } 
      if (!rpc) return;
      const shaUser = await getSHA256Hash(telegramUser.id.toString());
      if (!shaUser) return;
      const query = await rpc.get_table_rows({
        code: "xprtrustify",
        table: "accounts",
        scope: "xprtrustify",
        lower_bound: toEOSIOSha256(shaUser),
        upper_bound: toEOSIOSha256(shaUser),
        index_position: 2,
        key_type: "sha256",
      });
      console.log(query.rows);
      if (query && query.rows && query.rows.length > 0) {
        setTrustifyUser(query.rows[0]);
        
      }
      console.log('when fetchTrustify',query.rows[0])
      return query.rows[0];
    
  }, [rpc, telegramUser, setTrustifyUser]);

  return {telegramUser,trustifyUser,fetchTrustifyUser};
};

export default useAppUser;