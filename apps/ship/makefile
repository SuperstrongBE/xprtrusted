ENVIRONMENT := testnet

deploy_testnet:
	rsync -avhpz . root@116.203.208.202:/root/posx --include-from=.syncinclude --exclude "*" --delete
	


deploy:
	 @if [ "$(ENVIRONMENT)" = "testnet" ]; then make deploy_testnet; fi
	 @if [ "$(ENVIRONMENT)" = "mainnet" ]; then make deploy_mainnet; fi
 	