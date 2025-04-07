(module
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i64_=>_none (func (param i32 i64)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i64_i64_i64_i64_=>_i32 (func (param i64 i64 i64 i64) (result i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i64_=>_i32 (func (param i64) (result i32)))
 (type $i64_i64_i64_i64_i32_i32_=>_i32 (func (param i64 i64 i64 i64 i32 i32) (result i32)))
 (type $i32_=>_i64 (func (param i32) (result i64)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_i32_i64_=>_none (func (param i32 i32 i64)))
 (type $i64_i64_i64_=>_none (func (param i64 i64 i64)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i64_i32_=>_i32 (func (param i32 i32 i64 i32) (result i32)))
 (type $i32_i64_=>_i32 (func (param i32 i64) (result i32)))
 (type $i32_i64_i32_=>_i32 (func (param i32 i64 i32) (result i32)))
 (type $i64_i64_i64_i32_i32_i32_=>_i32 (func (param i64 i64 i64 i32 i32 i32) (result i32)))
 (type $i64_i64_i64_i32_i32_i64_=>_i32 (func (param i64 i64 i64 i32 i32 i64) (result i32)))
 (type $i32_i32_=>_i64 (func (param i32 i32) (result i64)))
 (type $i32_=>_f64 (func (param i32) (result f64)))
 (import "env" "is_account" (func $~lib/as-chain/env/is_account (param i64) (result i32)))
 (import "env" "eosio_assert" (func $~lib/as-chain/env/eosio_assert (param i32 i32)))
 (import "env" "db_idx256_lowerbound" (func $~lib/as-chain/env/db_idx256_lowerbound (param i64 i64 i64 i32 i32 i32) (result i32)))
 (import "env" "db_find_i64" (func $~lib/as-chain/env/db_find_i64 (param i64 i64 i64 i64) (result i32)))
 (import "env" "db_get_i64" (func $~lib/as-chain/env/db_get_i64 (param i32 i32 i32) (result i32)))
 (import "env" "memcpy" (func $~lib/as-chain/env/memcpy (param i32 i32 i32) (result i32)))
 (import "env" "db_store_i64" (func $~lib/as-chain/env/db_store_i64 (param i64 i64 i64 i64 i32 i32) (result i32)))
 (import "env" "db_lowerbound_i64" (func $~lib/as-chain/env/db_lowerbound_i64 (param i64 i64 i64 i64) (result i32)))
 (import "env" "db_remove_i64" (func $~lib/as-chain/env/db_remove_i64 (param i32)))
 (import "env" "action_data_size" (func $~lib/as-chain/env/action_data_size (result i32)))
 (import "env" "read_action_data" (func $~lib/as-chain/env/read_action_data (param i32 i32) (result i32)))
 (import "env" "db_idx256_store" (func $~lib/as-chain/env/db_idx256_store (param i64 i64 i64 i64 i32 i32) (result i32)))
 (import "env" "db_idx256_find_primary" (func $~lib/as-chain/env/db_idx256_find_primary (param i64 i64 i64 i32 i32 i64) (result i32)))
 (import "env" "db_idx256_remove" (func $~lib/as-chain/env/db_idx256_remove (param i32)))
 (global $~lib/rt/stub/offset (mut i32) (i32.const 0))
 (global $~lib/as-chain/name/EMPTY_NAME (mut i32) (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $xprtrust.contract/xprtrust i32 (i32.const 7))
 (memory $0 1)
 (data (i32.const 1036) "\1c")
 (data (i32.const 1048) "\03\00\00\00\08\00\00\00\01")
 (data (i32.const 1068) "<")
 (data (i32.const 1084) " \00\00\00.12345abcdefghijklmnopqrstuvwxyz")
 (data (i32.const 1132) ",")
 (data (i32.const 1144) "\04\00\00\00\10\00\00\00@\04\00\00@\04\00\00 \00\00\00 ")
 (data (i32.const 1180) "\dc")
 (data (i32.const 1192) "\01\00\00\00\cc\00\00\00F\00a\00i\00l\00e\00d\00 \00t\00o\00 \00\'\00s\00t\00o\00r\00e\00\'\00 \00v\00a\00l\00u\00e\00 \00a\00s\00 \00i\00t\00 \00a\00l\00r\00e\00a\00d\00y\00 \00e\00x\00i\00s\00t\00s\00,\00 \00p\00l\00e\00a\00s\00e\00 \00u\00s\00e\00 \00\'\00s\00e\00t\00\'\00 \00o\00r\00 \00\'\00u\00p\00d\00a\00t\00e\00\'\00 \00i\00f\00 \00y\00o\00u\00 \00w\00i\00s\00h\00 \00t\00o\00 \00u\00p\00d\00a\00t\00e\00 \00v\00a\00l\00u\00e")
 (data (i32.const 1404) "\dc")
 (data (i32.const 1416) "\01\00\00\00\c0\00\00\00F\00a\00i\00l\00e\00d\00 \00t\00o\00 \00\'\00u\00p\00d\00a\00t\00e\00\'\00 \00v\00a\00l\00u\00e\00 \00a\00s\00 \00i\00t\00e\00m\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t\00,\00 \00p\00l\00e\00a\00s\00e\00 \00u\00s\00e\00 \00\'\00s\00e\00t\00\'\00 \00o\00r\00 \00\'\00s\00t\00o\00r\00e\00\'\00 \00t\00o\00 \00s\00a\00v\00e\00 \00v\00a\00l\00u\00e\00 \00f\00i\00r\00s\00t")
 (data (i32.const 1628) "\dc")
 (data (i32.const 1640) "\01\00\00\00\c0\00\00\00F\00a\00i\00l\00e\00d\00 \00t\00o\00 \00\'\00r\00e\00m\00o\00v\00e\00\'\00 \00v\00a\00l\00u\00e\00 \00a\00s\00 \00i\00t\00e\00m\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t\00,\00 \00p\00l\00e\00a\00s\00e\00 \00u\00s\00e\00 \00\'\00s\00e\00t\00\'\00 \00o\00r\00 \00\'\00s\00t\00o\00r\00e\00\'\00 \00t\00o\00 \00s\00a\00v\00e\00 \00v\00a\00l\00u\00e\00 \00f\00i\00r\00s\00t")
 (data (i32.const 1852) "\8c")
 (data (i32.const 1864) "\01\00\00\00t\00\00\00F\00a\00i\00l\00e\00d\00 \00t\00o\00 \00f\00i\00n\00d\00 \00\'\00n\00e\00x\00t\00\'\00 \00v\00a\00l\00u\00e\00 \00a\00s\00 \00c\00u\00r\00r\00e\00n\00t\00 \00i\00t\00e\00m\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t")
 (data (i32.const 1996) "\8c")
 (data (i32.const 2008) "\01\00\00\00|\00\00\00F\00a\00i\00l\00e\00d\00 \00t\00o\00 \00f\00i\00n\00d\00 \00\'\00p\00r\00e\00v\00i\00o\00u\00s\00\'\00 \00v\00a\00l\00u\00e\00 \00a\00s\00 \00c\00u\00r\00r\00e\00n\00t\00 \00i\00t\00e\00m\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t")
 (data (i32.const 2140) "|")
 (data (i32.const 2152) "\01\00\00\00f\00\00\00n\00e\00x\00t\00 \00p\00r\00i\00m\00a\00r\00y\00 \00k\00e\00y\00 \00i\00n\00 \00t\00a\00b\00l\00e\00 \00i\00s\00 \00a\00t\00 \00a\00u\00t\00o\00i\00n\00c\00r\00e\00m\00e\00n\00t\00 \00l\00i\00m\00i\00t")
 (data (i32.const 2268) "\1c")
 (data (i32.const 2280) "\01")
 (data (i32.const 2300) "<")
 (data (i32.const 2312) "\01\00\00\00$\00\00\00 \00i\00s\00 \00n\00o\00t\00 \00a\00n\00 \00a\00c\00c\00o\00u\00n\00t")
 (data (i32.const 2364) "\1c")
 (data (i32.const 2376) "\14\00\00\00\0c\00\00\00\f0\08\00\00\00\00\00\00\10\t")
 (data (i32.const 2396) "<")
 (data (i32.const 2408) "\01\00\00\00\"\00\00\00u\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00u\00p\00c\00a\00s\00t")
 (data (i32.const 2460) "\\")
 (data (i32.const 2472) "\01\00\00\00>\00\00\00D\00e\00c\00o\00d\00e\00r\00.\00i\00n\00c\00P\00o\00s\00:\00 \00b\00u\00f\00f\00e\00r\00 \00o\00v\00e\00r\00f\00l\00o\00w")
 (data (i32.const 2556) "<")
 (data (i32.const 2568) "\01\00\00\00\1e\00\00\00A\00l\00r\00e\00a\00d\00y\00 \00t\00r\00u\00s\00t\00e\00d")
 (data (i32.const 2620) "L")
 (data (i32.const 2632) "\01\00\00\002\00\00\00c\00h\00e\00c\00k\00P\00o\00s\00:\00 \00b\00u\00f\00f\00e\00r\00 \00o\00v\00e\00r\00f\00l\00o\00w")
 (data (i32.const 2700) "L")
 (data (i32.const 2712) "\01\00\00\00.\00\00\00i\00n\00c\00P\00o\00s\00:\00 \00b\00u\00f\00f\00e\00r\00 \00o\00v\00e\00r\00f\00l\00o\00w")
 (data (i32.const 2780) ",")
 (data (i32.const 2792) "\01\00\00\00\1a\00\00\00b\00a\00d\00 \00d\00b\00 \00i\00n\00d\00e\00x\00!")
 (data (i32.const 2828) "L")
 (data (i32.const 2840) "\01\00\00\000\00\00\00p\00r\00i\00m\00a\00r\00y\00 \00v\00a\00l\00u\00e\00 \00n\00o\00t\00 \00f\00o\00u\00n\00d\00!")
 (data (i32.const 2908) "<")
 (data (i32.const 2920) "\01\00\00\00\1e\00\00\00u\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00n\00u\00l\00l")
 (data (i32.const 2972) "<")
 (data (i32.const 2984) "\01\00\00\00 \00\00\00i\00d\00x\002\005\006\00:\00 \00b\00a\00d\00 \00t\00y\00p\00e")
 (data (i32.const 3036) "L")
 (data (i32.const 3048) "\01\00\00\004\00\00\00s\00t\00o\00r\00e\00E\00x\00:\00 \00i\00d\00x\002\005\006\00:\00 \00b\00a\00d\00 \00v\00a\00l\00u\00e")
 (data (i32.const 3120) "\1f\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 3156) "B\00\00\00\00\00\00\00 \00\00\00\00\00\00\00 ")
 (data (i32.const 3184) "\08")
 (data (i32.const 3204) " \00\00\00\0b\00\00\00 \00\00\00\06\00\00\00 ")
 (data (i32.const 3244) " \00\00\00\00\00\00\00 \00\00\00\00\00\00\00\02A\00\00\00\00\00\00 \00\00\00\10\00\00\00\02\t\00\00\00\00\00\00\04A")
 (data (i32.const 3300) " \00\00\00\00\00\00\00\02\02")
 (data (i32.const 3364) " ")
 (export "xprtrust" (global $xprtrust.contract/xprtrust))
 (export "xprtrust#get:receiver" (func $~lib/as-chain/helpers/Contract#get:receiver))
 (export "xprtrust#set:receiver" (func $~lib/rt/common/BLOCK#set:mmInfo))
 (export "xprtrust#get:firstReceiver" (func $~lib/as-chain/helpers/Contract#get:firstReceiver))
 (export "xprtrust#set:firstReceiver" (func $~lib/rt/common/OBJECT#set:gcInfo))
 (export "xprtrust#get:action" (func $~lib/as-chain/helpers/Contract#get:action))
 (export "xprtrust#set:action" (func $~lib/rt/common/OBJECT#set:gcInfo2))
 (export "xprtrust#constructor" (func $xprtrust.contract/xprtrust#constructor))
 (export "xprtrust#addTrustedAccount" (func $xprtrust.contract/xprtrust#addTrustedAccount))
 (export "xprtrust#removeTrusted" (func $xprtrust.contract/xprtrust#removeTrusted))
 (export "apply" (func $xprtrust.contract/apply))
 (export "memory" (memory $0))
 (start $~start)
 (func $~lib/as-chain/name/Name#set:N (param $0 i32) (param $1 i64)
  (i64.store
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/rt/stub/maybeGrowMemory (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (if
   (i32.gt_u
    (local.get $0)
    (local.tee $1
     (i32.and
      (i32.add
       (i32.shl
        (local.tee $2
         (memory.size)
        )
        (i32.const 16)
       )
       (i32.const 15)
      )
      (i32.const -16)
     )
    )
   )
   (if
    (i32.lt_s
     (memory.grow
      (select
       (local.get $2)
       (local.tee $1
        (i32.shr_u
         (i32.and
          (i32.add
           (i32.sub
            (local.get $0)
            (local.get $1)
           )
           (i32.const 65535)
          )
          (i32.const -65536)
         )
         (i32.const 16)
        )
       )
       (i32.lt_s
        (local.get $1)
        (local.get $2)
       )
      )
     )
     (i32.const 0)
    )
    (if
     (i32.lt_s
      (memory.grow
       (local.get $1)
      )
      (i32.const 0)
     )
     (unreachable)
    )
   )
  )
  (global.set $~lib/rt/stub/offset
   (local.get $0)
  )
 )
 (func $~lib/rt/common/BLOCK#set:mmInfo (param $0 i32) (param $1 i32)
  (i32.store
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/rt/stub/__alloc (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (if
   (i32.gt_u
    (local.get $0)
    (i32.const 1073741820)
   )
   (unreachable)
  )
  (local.set $1
   (global.get $~lib/rt/stub/offset)
  )
  (call $~lib/rt/stub/maybeGrowMemory
   (i32.add
    (local.tee $2
     (i32.add
      (global.get $~lib/rt/stub/offset)
      (i32.const 4)
     )
    )
    (local.tee $0
     (i32.sub
      (i32.and
       (i32.add
        (local.get $0)
        (i32.const 19)
       )
       (i32.const -16)
      )
      (i32.const 4)
     )
    )
   )
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $1)
   (local.get $0)
  )
  (local.get $2)
 )
 (func $~lib/rt/common/OBJECT#set:gcInfo (param $0 i32) (param $1 i32)
  (i32.store offset=4
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/rt/common/OBJECT#set:gcInfo2 (param $0 i32) (param $1 i32)
  (i32.store offset=8
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/rt/common/OBJECT#set:rtId (param $0 i32) (param $1 i32)
  (i32.store offset=12
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/rt/common/OBJECT#set:rtSize (param $0 i32) (param $1 i32)
  (i32.store offset=16
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/rt/stub/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (if
   (i32.gt_u
    (local.get $0)
    (i32.const 1073741804)
   )
   (unreachable)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.tee $2
    (i32.sub
     (local.tee $3
      (call $~lib/rt/stub/__alloc
       (i32.add
        (local.get $0)
        (i32.const 16)
       )
      )
     )
     (i32.const 4)
    )
   )
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo2
   (local.get $2)
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:rtId
   (local.get $2)
   (local.get $1)
  )
  (call $~lib/rt/common/OBJECT#set:rtSize
   (local.get $2)
   (local.get $0)
  )
  (i32.add
   (local.get $3)
   (i32.const 16)
  )
 )
 (func $tables/account.table/TrustedAccount#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $2
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 9)
    )
   )
   (local.get $0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $2)
   (local.get $1)
  )
  (local.get $2)
 )
 (func $~lib/as-chain/bignum/integer/u256/u256#set:lo2 (param $0 i32) (param $1 i64)
  (i64.store offset=8
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/as-chain/bignum/integer/u256/u256#set:hi1 (param $0 i32) (param $1 i64)
  (i64.store offset=16
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/as-chain/bignum/integer/u256/u256#set:hi2 (param $0 i32) (param $1 i64)
  (i64.store offset=24
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/as-chain/bignum/integer/u256/u256#constructor (param $0 i64) (param $1 i64) (param $2 i64) (param $3 i64) (result i32)
  (local $4 i32)
  (call $~lib/as-chain/name/Name#set:N
   (local.tee $4
    (call $~lib/rt/stub/__new
     (i32.const 32)
     (i32.const 12)
    )
   )
   (local.get $0)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:lo2
   (local.get $4)
   (local.get $1)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:hi1
   (local.get $4)
   (local.get $2)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:hi2
   (local.get $4)
   (local.get $3)
  )
  (local.get $4)
 )
 (func $tables/account.table/TrustedAccount#constructor@varargs (param $0 i32) (result i32)
  (local $1 i32)
  (block $2of2
   (block $1of2
    (block $0of2
     (block $outOfRange
      (br_table $0of2 $1of2 $2of2 $outOfRange
       (global.get $~argumentsLength)
      )
     )
     (unreachable)
    )
    (local.set $0
     (global.get $~lib/as-chain/name/EMPTY_NAME)
    )
   )
   (local.set $1
    (call $~lib/as-chain/bignum/integer/u256/u256#constructor
     (i64.const 0)
     (i64.const 0)
     (i64.const 0)
     (i64.const 0)
    )
   )
  )
  (call $tables/account.table/TrustedAccount#constructor
   (local.get $0)
   (local.get $1)
  )
 )
 (func $tables/account.table/TrustedAccount.get:tableName (result i32)
  (local $0 i32)
  (call $~lib/as-chain/name/Name#set:N
   (local.tee $0
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 5)
    )
   )
   (i64.const 0)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.get $0)
   (i64.const 3607749779137757184)
  )
  (local.get $0)
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (block $~lib/util/memory/memmove|inlined.0
   (local.set $4
    (local.get $2)
   )
   (br_if $~lib/util/memory/memmove|inlined.0
    (i32.eq
     (local.get $0)
     (local.get $1)
    )
   )
   (if
    (i32.lt_u
     (local.get $0)
     (local.get $1)
    )
    (loop $while-continue|0
     (if
      (local.get $4)
      (block
       (local.set $0
        (i32.add
         (local.tee $2
          (local.get $0)
         )
         (i32.const 1)
        )
       )
       (local.set $1
        (i32.add
         (local.tee $3
          (local.get $1)
         )
         (i32.const 1)
        )
       )
       (i32.store8
        (local.get $2)
        (i32.load8_u
         (local.get $3)
        )
       )
       (local.set $4
        (i32.sub
         (local.get $4)
         (i32.const 1)
        )
       )
       (br $while-continue|0)
      )
     )
    )
    (loop $while-continue|1
     (if
      (local.get $4)
      (block
       (i32.store8
        (i32.add
         (local.tee $4
          (i32.sub
           (local.get $4)
           (i32.const 1)
          )
         )
         (local.get $0)
        )
        (i32.load8_u
         (i32.add
          (local.get $1)
          (local.get $4)
         )
        )
       )
       (br $while-continue|1)
      )
     )
    )
   )
  )
 )
 (func $~lib/rt/__newArray (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local.set $3
   (call $~lib/rt/stub/__new
    (local.tee $1
     (i32.shl
      (local.get $0)
      (local.get $1)
     )
    )
    (i32.const 0)
   )
  )
  (i32.store
   (local.tee $2
    (call $~lib/rt/stub/__new
     (i32.const 16)
     (local.get $2)
    )
   )
   (local.get $3)
  )
  (i32.store offset=4
   (local.get $2)
   (local.get $3)
  )
  (i32.store offset=8
   (local.get $2)
   (local.get $1)
  )
  (i32.store offset=12
   (local.get $2)
   (local.get $0)
  )
  (local.get $2)
 )
 (func $~lib/proton-tsc/modules/store/store/TableStore<tables/account.table/TrustedAccount>#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i64)
  (local $7 i64)
  (local $8 i32)
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $4
    (call $~lib/rt/stub/__new
     (i32.const 16)
     (i32.const 13)
    )
   )
   (i32.const 0)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:lo2
   (local.get $4)
   (i64.const -1)
  )
  (global.set $~argumentsLength
   (i32.const 0)
  )
  (drop
   (call $tables/account.table/TrustedAccount#constructor@varargs
    (global.get $~lib/as-chain/name/EMPTY_NAME)
   )
  )
  (local.set $3
   (local.get $0)
  )
  (local.set $8
   (call $tables/account.table/TrustedAccount.get:tableName)
  )
  (local.set $5
   (i64.and
    (i64.load
     (call $tables/account.table/TrustedAccount.get:tableName)
    )
    (i64.const -16)
   )
  )
  (drop
   (i32.load offset=4
    (local.tee $0
     (call $~lib/rt/__newArray
      (i32.const 1)
      (i32.const 2)
      (i32.const 17)
     )
    )
   )
  )
  (local.set $6
   (i64.load
    (local.get $3)
   )
  )
  (local.set $7
   (i64.load
    (local.get $1)
   )
  )
  (call $~lib/as-chain/name/Name#set:N
   (block (result i32)
    (if
     (i32.eqz
      (local.tee $2
       (call $~lib/rt/stub/__new
        (i32.const 28)
        (i32.const 18)
       )
      )
     )
     (local.set $2
      (call $~lib/rt/stub/__new
       (i32.const 28)
       (i32.const 16)
      )
     )
    )
    (local.get $2)
   )
   (local.get $6)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:lo2
   (local.get $2)
   (local.get $7)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:hi1
   (local.get $2)
   (local.get $5)
  )
  (i32.store offset=24
   (local.get $2)
   (i32.const 0)
  )
  (i32.store
   (i32.load offset=4
    (local.get $0)
   )
   (local.get $2)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $2
    (call $~lib/rt/stub/__new
     (i32.const 16)
     (i32.const 14)
    )
   )
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $2)
   (i32.const 0)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:lo2
   (local.get $2)
   (i64.const -1)
  )
  (local.set $5
   (i64.load
    (local.get $3)
   )
  )
  (local.set $6
   (i64.load
    (local.get $1)
   )
  )
  (local.set $7
   (i64.load
    (local.get $8)
   )
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.tee $1
    (call $~lib/rt/stub/__new
     (i32.const 24)
     (i32.const 15)
    )
   )
   (local.get $5)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:lo2
   (local.get $1)
   (local.get $6)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:hi1
   (local.get $1)
   (local.get $7)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $2)
   (local.get $1)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $2)
   (local.get $0)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $4)
   (local.get $2)
  )
  (local.get $4)
 )
 (func $xprtrust.contract/xprtrust#constructor (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (block (result i32)
    (if
     (i32.eqz
      (block (result i32)
       (if
        (i32.eqz
         (local.get $0)
        )
        (local.set $0
         (call $~lib/rt/stub/__new
          (i32.const 16)
          (i32.const 7)
         )
        )
       )
       (local.get $0)
      )
     )
     (local.set $0
      (call $~lib/rt/stub/__new
       (i32.const 12)
       (i32.const 8)
      )
     )
    )
    (local.get $0)
   )
   (local.get $1)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $0)
   (local.get $2)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo2
   (local.get $0)
   (local.get $3)
  )
  (local.set $0
   (i32.load
    (local.tee $2
     (local.get $0)
    )
   )
  )
  (global.set $~argumentsLength
   (i32.const 1)
  )
  (i32.store offset=12
   (local.get $2)
   (call $~lib/proton-tsc/modules/store/store/TableStore<tables/account.table/TrustedAccount>#constructor
    (local.get $0)
    (local.get $0)
   )
  )
  (local.get $2)
 )
 (func $~lib/as-chain/helpers/Contract#get:receiver (param $0 i32) (result i32)
  (i32.load
   (local.get $0)
  )
 )
 (func $~lib/as-chain/helpers/Contract#get:firstReceiver (param $0 i32) (result i32)
  (i32.load offset=4
   (local.get $0)
  )
 )
 (func $~lib/as-chain/helpers/Contract#get:action (param $0 i32) (result i32)
  (i32.load offset=8
   (local.get $0)
  )
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  (loop $while-continue|0
   (if
    (local.get $1)
    (block
     (local.set $0
      (i32.add
       (local.tee $2
        (local.get $0)
       )
       (i32.const 1)
      )
     )
     (i32.store8
      (local.get $2)
      (i32.const 0)
     )
     (local.set $1
      (i32.sub
       (local.get $1)
       (i32.const 1)
      )
     )
     (br $while-continue|0)
    )
   )
  )
 )
 (func $~lib/array/Array<u8>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $1
    (call $~lib/rt/stub/__new
     (i32.const 16)
     (i32.const 4)
    )
   )
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $1)
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo2
   (local.get $1)
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:rtId
   (local.get $1)
   (i32.const 0)
  )
  (if
   (i32.gt_u
    (local.get $0)
    (i32.const 1073741820)
   )
   (unreachable)
  )
  (call $~lib/memory/memory.fill
   (local.tee $3
    (call $~lib/rt/stub/__new
     (local.tee $2
      (select
       (local.get $0)
       (i32.const 8)
       (i32.gt_u
        (local.get $0)
        (i32.const 8)
       )
      )
     )
     (i32.const 0)
    )
   )
   (local.get $2)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $1)
   (local.get $3)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $1)
   (local.get $3)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo2
   (local.get $1)
   (local.get $2)
  )
  (call $~lib/rt/common/OBJECT#set:rtId
   (local.get $1)
   (local.get $0)
  )
  (local.get $1)
 )
 (func $~lib/array/Array<u8>#__get (param $0 i32) (param $1 i32) (result i32)
  (if
   (i32.ge_u
    (local.get $1)
    (i32.load offset=12
     (local.get $0)
    )
   )
   (unreachable)
  )
  (i32.load8_u
   (i32.add
    (i32.load offset=4
     (local.get $0)
    )
    (local.get $1)
   )
  )
 )
 (func $~lib/rt/stub/__renew (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (if
   (i32.gt_u
    (local.get $1)
    (i32.const 1073741804)
   )
   (unreachable)
  )
  (local.set $3
   (i32.add
    (local.get $1)
    (i32.const 16)
   )
  )
  (if
   (i32.eqz
    (select
     (i32.eqz
      (i32.and
       (local.tee $0
        (i32.sub
         (local.get $0)
         (i32.const 16)
        )
       )
       (i32.const 15)
      )
     )
     (i32.const 0)
     (local.get $0)
    )
   )
   (unreachable)
  )
  (local.set $6
   (i32.eq
    (global.get $~lib/rt/stub/offset)
    (i32.add
     (local.get $0)
     (local.tee $4
      (i32.load
       (local.tee $5
        (i32.sub
         (local.get $0)
         (i32.const 4)
        )
       )
      )
     )
    )
   )
  )
  (local.set $2
   (i32.sub
    (i32.and
     (i32.add
      (local.get $3)
      (i32.const 19)
     )
     (i32.const -16)
    )
    (i32.const 4)
   )
  )
  (if
   (i32.gt_u
    (local.get $3)
    (local.get $4)
   )
   (if
    (local.get $6)
    (block
     (if
      (i32.gt_u
       (local.get $3)
       (i32.const 1073741820)
      )
      (unreachable)
     )
     (call $~lib/rt/stub/maybeGrowMemory
      (i32.add
       (local.get $0)
       (local.get $2)
      )
     )
     (call $~lib/rt/common/BLOCK#set:mmInfo
      (local.get $5)
      (local.get $2)
     )
    )
    (block
     (call $~lib/memory/memory.copy
      (local.tee $2
       (call $~lib/rt/stub/__alloc
        (select
         (local.get $2)
         (local.tee $3
          (i32.shl
           (local.get $4)
           (i32.const 1)
          )
         )
         (i32.gt_u
          (local.get $2)
          (local.get $3)
         )
        )
       )
      )
      (local.get $0)
      (local.get $4)
     )
     (local.set $0
      (local.get $2)
     )
    )
   )
   (if
    (local.get $6)
    (block
     (global.set $~lib/rt/stub/offset
      (i32.add
       (local.get $0)
       (local.get $2)
      )
     )
     (call $~lib/rt/common/BLOCK#set:mmInfo
      (local.get $5)
      (local.get $2)
     )
    )
   )
  )
  (call $~lib/rt/common/OBJECT#set:rtSize
   (i32.sub
    (local.get $0)
    (i32.const 4)
   )
   (local.get $1)
  )
  (i32.add
   (local.get $0)
   (i32.const 16)
  )
 )
 (func $~lib/array/ensureCapacity (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (if
   (i32.gt_u
    (local.get $1)
    (i32.shr_u
     (local.tee $3
      (i32.load offset=8
       (local.get $0)
      )
     )
     (local.get $2)
    )
   )
   (block
    (if
     (i32.gt_u
      (local.get $1)
      (i32.shr_u
       (i32.const 1073741820)
       (local.get $2)
      )
     )
     (unreachable)
    )
    (local.set $1
     (i32.shl
      (select
       (local.get $1)
       (i32.const 8)
       (i32.gt_u
        (local.get $1)
        (i32.const 8)
       )
      )
      (local.get $2)
     )
    )
    (call $~lib/memory/memory.fill
     (i32.add
      (local.tee $2
       (call $~lib/rt/stub/__renew
        (local.tee $4
         (i32.load
          (local.get $0)
         )
        )
        (local.tee $1
         (select
          (local.tee $2
           (select
            (local.tee $2
             (i32.shl
              (local.get $3)
              (i32.const 1)
             )
            )
            (i32.const 1073741820)
            (i32.lt_u
             (local.get $2)
             (i32.const 1073741820)
            )
           )
          )
          (local.get $1)
          (i32.lt_u
           (local.get $1)
           (local.get $2)
          )
         )
        )
       )
      )
      (local.get $3)
     )
     (i32.sub
      (local.get $1)
      (local.get $3)
     )
    )
    (if
     (i32.ne
      (local.get $2)
      (local.get $4)
     )
     (block
      (i32.store
       (local.get $0)
       (local.get $2)
      )
      (i32.store offset=4
       (local.get $0)
       (local.get $2)
      )
     )
    )
    (i32.store offset=8
     (local.get $0)
     (local.get $1)
    )
   )
  )
 )
 (func $~lib/array/Array<u8>#slice (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local.set $3
   (i32.load offset=12
    (local.get $0)
   )
  )
  (local.set $1
   (if (result i32)
    (i32.lt_s
     (local.get $1)
     (i32.const 0)
    )
    (select
     (local.tee $1
      (i32.add
       (local.get $1)
       (local.get $3)
      )
     )
     (i32.const 0)
     (i32.gt_s
      (local.get $1)
      (i32.const 0)
     )
    )
    (select
     (local.get $1)
     (local.get $3)
     (i32.lt_s
      (local.get $1)
      (local.get $3)
     )
    )
   )
  )
  (call $~lib/memory/memory.copy
   (i32.load offset=4
    (local.tee $3
     (call $~lib/rt/__newArray
      (local.tee $2
       (select
        (local.tee $2
         (i32.sub
          (if (result i32)
           (i32.lt_s
            (local.get $2)
            (i32.const 0)
           )
           (select
            (local.tee $2
             (i32.add
              (local.get $2)
              (local.get $3)
             )
            )
            (i32.const 0)
            (i32.gt_s
             (local.get $2)
             (i32.const 0)
            )
           )
           (select
            (local.get $2)
            (local.get $3)
            (i32.lt_s
             (local.get $2)
             (local.get $3)
            )
           )
          )
          (local.get $1)
         )
        )
        (i32.const 0)
        (i32.gt_s
         (local.get $2)
         (i32.const 0)
        )
       )
      )
      (i32.const 0)
      (i32.const 4)
     )
    )
   )
   (i32.add
    (i32.load offset=4
     (local.get $0)
    )
    (local.get $1)
   )
   (local.get $2)
  )
  (local.get $3)
 )
 (func $~lib/arraybuffer/ArrayBuffer#get:byteLength (param $0 i32) (result i32)
  (i32.load offset=16
   (i32.sub
    (local.get $0)
    (i32.const 20)
   )
  )
 )
 (func $~lib/string/String.UTF8.decodeUnsafe (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (if
   (i32.gt_u
    (local.get $0)
    (local.tee $3
     (i32.add
      (local.get $0)
      (local.get $1)
     )
    )
   )
   (unreachable)
  )
  (local.set $1
   (local.tee $5
    (call $~lib/rt/stub/__new
     (i32.shl
      (local.get $1)
      (i32.const 1)
     )
     (i32.const 1)
    )
   )
  )
  (loop $while-continue|0
   (if
    (i32.lt_u
     (local.get $0)
     (local.get $3)
    )
    (block $while-break|0
     (local.set $2
      (i32.load8_u
       (local.get $0)
      )
     )
     (local.set $0
      (i32.add
       (local.get $0)
       (i32.const 1)
      )
     )
     (if
      (i32.and
       (local.get $2)
       (i32.const 128)
      )
      (block
       (br_if $while-break|0
        (i32.eq
         (local.get $0)
         (local.get $3)
        )
       )
       (local.set $4
        (i32.and
         (i32.load8_u
          (local.get $0)
         )
         (i32.const 63)
        )
       )
       (local.set $0
        (i32.add
         (local.get $0)
         (i32.const 1)
        )
       )
       (if
        (i32.eq
         (i32.and
          (local.get $2)
          (i32.const 224)
         )
         (i32.const 192)
        )
        (i32.store16
         (local.get $1)
         (i32.or
          (local.get $4)
          (i32.shl
           (i32.and
            (local.get $2)
            (i32.const 31)
           )
           (i32.const 6)
          )
         )
        )
        (block
         (br_if $while-break|0
          (i32.eq
           (local.get $0)
           (local.get $3)
          )
         )
         (local.set $6
          (i32.and
           (i32.load8_u
            (local.get $0)
           )
           (i32.const 63)
          )
         )
         (local.set $0
          (i32.add
           (local.get $0)
           (i32.const 1)
          )
         )
         (if
          (i32.eq
           (i32.and
            (local.get $2)
            (i32.const 240)
           )
           (i32.const 224)
          )
          (local.set $2
           (i32.or
            (local.get $6)
            (i32.or
             (i32.shl
              (i32.and
               (local.get $2)
               (i32.const 15)
              )
              (i32.const 12)
             )
             (i32.shl
              (local.get $4)
              (i32.const 6)
             )
            )
           )
          )
          (block
           (br_if $while-break|0
            (i32.eq
             (local.get $0)
             (local.get $3)
            )
           )
           (local.set $2
            (i32.or
             (i32.and
              (i32.load8_u
               (local.get $0)
              )
              (i32.const 63)
             )
             (i32.or
              (i32.or
               (i32.shl
                (i32.and
                 (local.get $2)
                 (i32.const 7)
                )
                (i32.const 18)
               )
               (i32.shl
                (local.get $4)
                (i32.const 12)
               )
              )
              (i32.shl
               (local.get $6)
               (i32.const 6)
              )
             )
            )
           )
           (local.set $0
            (i32.add
             (local.get $0)
             (i32.const 1)
            )
           )
          )
         )
         (if
          (i32.lt_u
           (local.get $2)
           (i32.const 65536)
          )
          (i32.store16
           (local.get $1)
           (local.get $2)
          )
          (block
           (i32.store
            (local.get $1)
            (i32.or
             (i32.or
              (i32.shr_u
               (local.tee $2
                (i32.sub
                 (local.get $2)
                 (i32.const 65536)
                )
               )
               (i32.const 10)
              )
              (i32.const 55296)
             )
             (i32.shl
              (i32.or
               (i32.and
                (local.get $2)
                (i32.const 1023)
               )
               (i32.const 56320)
              )
              (i32.const 16)
             )
            )
           )
           (local.set $1
            (i32.add
             (local.get $1)
             (i32.const 2)
            )
           )
          )
         )
        )
       )
      )
      (i32.store16
       (local.get $1)
       (local.get $2)
      )
     )
     (local.set $1
      (i32.add
       (local.get $1)
       (i32.const 2)
      )
     )
     (br $while-continue|0)
    )
   )
  )
  (call $~lib/rt/stub/__renew
   (local.get $5)
   (i32.sub
    (local.get $1)
    (local.get $5)
   )
  )
 )
 (func $~lib/string/String.UTF8.decode (param $0 i32) (result i32)
  (call $~lib/string/String.UTF8.decodeUnsafe
   (local.get $0)
   (call $~lib/arraybuffer/ArrayBuffer#get:byteLength
    (local.get $0)
   )
  )
 )
 (func $~lib/as-chain/name/N2S (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local.set $2
   (call $~lib/array/Array<u8>#constructor
    (i32.const 13)
   )
  )
  (loop $for-loop|0
   (if
    (i32.le_s
     (local.get $1)
     (i32.const 12)
    )
    (block
     (local.set $3
      (i32.sub
       (i32.const 12)
       (local.get $1)
      )
     )
     (local.set $4
      (if (result i32)
       (local.get $1)
       (call $~lib/array/Array<u8>#__get
        (i32.const 1152)
        (i32.wrap_i64
         (i64.and
          (local.get $0)
          (i64.const 31)
         )
        )
       )
       (call $~lib/array/Array<u8>#__get
        (i32.const 1152)
        (i32.wrap_i64
         (i64.and
          (local.get $0)
          (i64.const 15)
         )
        )
       )
      )
     )
     (if
      (i32.ge_u
       (local.get $3)
       (i32.load offset=12
        (local.get $2)
       )
      )
      (block
       (if
        (i32.lt_s
         (local.get $3)
         (i32.const 0)
        )
        (unreachable)
       )
       (call $~lib/array/ensureCapacity
        (local.get $2)
        (local.tee $5
         (i32.add
          (local.get $3)
          (i32.const 1)
         )
        )
        (i32.const 0)
       )
       (call $~lib/rt/common/OBJECT#set:rtId
        (local.get $2)
        (local.get $5)
       )
      )
     )
     (i32.store8
      (i32.add
       (local.get $3)
       (i32.load offset=4
        (local.get $2)
       )
      )
      (local.get $4)
     )
     (local.set $0
      (select
       (i64.shr_u
        (local.get $0)
        (i64.const 5)
       )
       (i64.shr_u
        (local.get $0)
        (i64.const 4)
       )
       (local.get $1)
      )
     )
     (local.set $1
      (i32.add
       (local.get $1)
       (i32.const 1)
      )
     )
     (br $for-loop|0)
    )
   )
  )
  (local.set $1
   (i32.sub
    (i32.load offset=12
     (local.get $2)
    )
    (i32.const 1)
   )
  )
  (loop $for-loop|1
   (if
    (i32.ge_s
     (local.get $1)
     (i32.const 0)
    )
    (if
     (i32.eq
      (call $~lib/array/Array<u8>#__get
       (local.get $2)
       (local.get $1)
      )
      (i32.const 46)
     )
     (block
      (local.set $1
       (i32.sub
        (local.get $1)
        (i32.const 1)
       )
      )
      (br $for-loop|1)
     )
    )
   )
  )
  (call $~lib/string/String.UTF8.decode
   (i32.load
    (call $~lib/array/Array<u8>#slice
     (local.get $2)
     (i32.const 0)
     (i32.add
      (local.get $1)
      (i32.const 1)
     )
    )
   )
  )
 )
 (func $~lib/string/String#get:length (param $0 i32) (result i32)
  (i32.shr_u
   (i32.load offset=16
    (i32.sub
     (local.get $0)
     (i32.const 20)
    )
   )
   (i32.const 1)
  )
 )
 (func $~lib/string/String.__concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (block $__inlined_func$~lib/string/String#concat
   (if
    (i32.eqz
     (local.tee $2
      (i32.add
       (local.tee $3
        (i32.shl
         (call $~lib/string/String#get:length
          (local.get $0)
         )
         (i32.const 1)
        )
       )
       (local.tee $4
        (i32.shl
         (call $~lib/string/String#get:length
          (local.get $1)
         )
         (i32.const 1)
        )
       )
      )
     )
    )
    (block
     (local.set $2
      (i32.const 2288)
     )
     (br $__inlined_func$~lib/string/String#concat)
    )
   )
   (call $~lib/memory/memory.copy
    (local.tee $2
     (call $~lib/rt/stub/__new
      (local.get $2)
      (i32.const 1)
     )
    )
    (local.get $0)
    (local.get $3)
   )
   (call $~lib/memory/memory.copy
    (i32.add
     (local.get $2)
     (local.get $3)
    )
    (local.get $1)
    (local.get $4)
   )
  )
  (local.get $2)
 )
 (func $~lib/string/String.UTF8.byteLength (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local.set $4
   (i32.add
    (local.get $0)
    (i32.load offset=16
     (i32.sub
      (local.get $0)
      (i32.const 20)
     )
    )
   )
  )
  (local.set $2
   (i32.ne
    (local.get $1)
    (i32.const 0)
   )
  )
  (loop $while-continue|0
   (if
    (i32.lt_u
     (local.get $0)
     (local.get $4)
    )
    (block $while-break|0
     (local.set $2
      (if (result i32)
       (i32.lt_u
        (local.tee $3
         (i32.load16_u
          (local.get $0)
         )
        )
        (i32.const 128)
       )
       (block (result i32)
        (br_if $while-break|0
         (i32.and
          (local.get $1)
          (i32.eqz
           (local.get $3)
          )
         )
        )
        (i32.add
         (local.get $2)
         (i32.const 1)
        )
       )
       (if (result i32)
        (i32.lt_u
         (local.get $3)
         (i32.const 2048)
        )
        (i32.add
         (local.get $2)
         (i32.const 2)
        )
        (block (result i32)
         (if
          (select
           (i32.gt_u
            (local.get $4)
            (i32.add
             (local.get $0)
             (i32.const 2)
            )
           )
           (i32.const 0)
           (i32.eq
            (i32.and
             (local.get $3)
             (i32.const 64512)
            )
            (i32.const 55296)
           )
          )
          (if
           (i32.eq
            (i32.and
             (i32.load16_u offset=2
              (local.get $0)
             )
             (i32.const 64512)
            )
            (i32.const 56320)
           )
           (block
            (local.set $2
             (i32.add
              (local.get $2)
              (i32.const 4)
             )
            )
            (local.set $0
             (i32.add
              (local.get $0)
              (i32.const 4)
             )
            )
            (br $while-continue|0)
           )
          )
         )
         (i32.add
          (local.get $2)
          (i32.const 3)
         )
        )
       )
      )
     )
     (local.set $0
      (i32.add
       (local.get $0)
       (i32.const 2)
      )
     )
     (br $while-continue|0)
    )
   )
  )
  (local.get $2)
 )
 (func $~lib/string/String.UTF8.encodeUnsafe (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local.set $4
   (i32.add
    (local.get $0)
    (i32.shl
     (local.get $1)
     (i32.const 1)
    )
   )
  )
  (local.set $1
   (local.get $2)
  )
  (loop $while-continue|0
   (if
    (i32.lt_u
     (local.get $0)
     (local.get $4)
    )
    (block
     (local.set $1
      (if (result i32)
       (i32.lt_u
        (local.tee $2
         (i32.load16_u
          (local.get $0)
         )
        )
        (i32.const 128)
       )
       (block (result i32)
        (i32.store8
         (local.get $1)
         (local.get $2)
        )
        (i32.add
         (local.get $1)
         (i32.const 1)
        )
       )
       (if (result i32)
        (i32.lt_u
         (local.get $2)
         (i32.const 2048)
        )
        (block (result i32)
         (i32.store16
          (local.get $1)
          (i32.or
           (i32.or
            (i32.shr_u
             (local.get $2)
             (i32.const 6)
            )
            (i32.const 192)
           )
           (i32.shl
            (i32.or
             (i32.and
              (local.get $2)
              (i32.const 63)
             )
             (i32.const 128)
            )
            (i32.const 8)
           )
          )
         )
         (i32.add
          (local.get $1)
          (i32.const 2)
         )
        )
        (block (result i32)
         (if
          (select
           (i32.gt_u
            (local.get $4)
            (i32.add
             (local.get $0)
             (i32.const 2)
            )
           )
           (i32.const 0)
           (i32.eq
            (i32.and
             (local.get $2)
             (i32.const 64512)
            )
            (i32.const 55296)
           )
          )
          (if
           (i32.eq
            (i32.and
             (local.tee $5
              (i32.load16_u offset=2
               (local.get $0)
              )
             )
             (i32.const 64512)
            )
            (i32.const 56320)
           )
           (block
            (i32.store
             (local.get $1)
             (i32.or
              (i32.or
               (i32.or
                (i32.shl
                 (i32.or
                  (i32.and
                   (local.tee $2
                    (i32.or
                     (i32.add
                      (i32.shl
                       (i32.and
                        (local.get $2)
                        (i32.const 1023)
                       )
                       (i32.const 10)
                      )
                      (i32.const 65536)
                     )
                     (i32.and
                      (local.get $5)
                      (i32.const 1023)
                     )
                    )
                   )
                   (i32.const 63)
                  )
                  (i32.const 128)
                 )
                 (i32.const 24)
                )
                (i32.shl
                 (i32.or
                  (i32.and
                   (i32.shr_u
                    (local.get $2)
                    (i32.const 6)
                   )
                   (i32.const 63)
                  )
                  (i32.const 128)
                 )
                 (i32.const 16)
                )
               )
               (i32.shl
                (i32.or
                 (i32.and
                  (i32.shr_u
                   (local.get $2)
                   (i32.const 12)
                  )
                  (i32.const 63)
                 )
                 (i32.const 128)
                )
                (i32.const 8)
               )
              )
              (i32.or
               (i32.shr_u
                (local.get $2)
                (i32.const 18)
               )
               (i32.const 240)
              )
             )
            )
            (local.set $1
             (i32.add
              (local.get $1)
              (i32.const 4)
             )
            )
            (local.set $0
             (i32.add
              (local.get $0)
              (i32.const 4)
             )
            )
            (br $while-continue|0)
           )
          )
         )
         (i32.store16
          (local.get $1)
          (i32.or
           (i32.or
            (i32.shr_u
             (local.get $2)
             (i32.const 12)
            )
            (i32.const 224)
           )
           (i32.shl
            (i32.or
             (i32.and
              (i32.shr_u
               (local.get $2)
               (i32.const 6)
              )
              (i32.const 63)
             )
             (i32.const 128)
            )
            (i32.const 8)
           )
          )
         )
         (i32.store8 offset=2
          (local.get $1)
          (i32.or
           (i32.and
            (local.get $2)
            (i32.const 63)
           )
           (i32.const 128)
          )
         )
         (i32.add
          (local.get $1)
          (i32.const 3)
         )
        )
       )
      )
     )
     (local.set $0
      (i32.add
       (local.get $0)
       (i32.const 2)
      )
     )
     (br $while-continue|0)
    )
   )
  )
  (if
   (local.get $3)
   (i32.store8
    (local.get $1)
    (i32.const 0)
   )
  )
 )
 (func $~lib/string/String.UTF8.encode (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local.set $2
   (call $~lib/rt/stub/__new
    (call $~lib/string/String.UTF8.byteLength
     (local.get $0)
     (local.get $1)
    )
    (i32.const 0)
   )
  )
  (call $~lib/string/String.UTF8.encodeUnsafe
   (local.get $0)
   (call $~lib/string/String#get:length
    (local.get $0)
   )
   (local.get $2)
   (local.get $1)
  )
  (local.get $2)
 )
 (func $~lib/as-chain/system/assert (param $0 i32) (param $1 i32)
  (local $2 i32)
  (if
   (local.get $0)
   (return)
  )
  (local.set $0
   (call $~lib/string/String.UTF8.encode
    (local.get $1)
    (i32.const 1)
   )
  )
  (global.set $~argumentsLength
   (i32.const 1)
  )
  (local.set $2
   (call $~lib/arraybuffer/ArrayBuffer#get:byteLength
    (local.get $0)
   )
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $1
    (call $~lib/rt/stub/__new
     (i32.const 12)
     (i32.const 21)
    )
   )
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $1)
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo2
   (local.get $1)
   (i32.const 0)
  )
  (if
   (i32.or
    (i32.lt_u
     (call $~lib/arraybuffer/ArrayBuffer#get:byteLength
      (local.get $0)
     )
     (local.get $2)
    )
    (i32.gt_u
     (local.get $2)
     (i32.const 1073741820)
    )
   )
   (unreachable)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $1)
   (local.get $0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $1)
   (local.get $0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo2
   (local.get $1)
   (local.get $2)
  )
  (call $~lib/as-chain/env/eosio_assert
   (i32.const 0)
   (i32.load offset=4
    (local.get $1)
   )
  )
 )
 (func $~lib/as-chain/system/check (param $0 i32) (param $1 i32)
  (call $~lib/as-chain/system/assert
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/util/string/strtol<f64> (param $0 i32) (result f64)
  (local $1 i32)
  (local $2 i32)
  (local $3 f64)
  (local $4 f64)
  (if
   (i32.eqz
    (local.tee $2
     (call $~lib/string/String#get:length
      (local.get $0)
     )
    )
   )
   (return
    (f64.const nan:0x8000000000000)
   )
  )
  (local.set $1
   (i32.load16_u
    (local.get $0)
   )
  )
  (loop $while-continue|0
   (if
    (block $__inlined_func$~lib/util/string/isSpace (result i32)
     (drop
      (br_if $__inlined_func$~lib/util/string/isSpace
       (i32.or
        (i32.eq
         (i32.or
          (local.get $1)
          (i32.const 128)
         )
         (i32.const 160)
        )
        (i32.le_u
         (i32.sub
          (local.get $1)
          (i32.const 9)
         )
         (i32.const 4)
        )
       )
       (i32.lt_u
        (local.get $1)
        (i32.const 5760)
       )
      )
     )
     (drop
      (br_if $__inlined_func$~lib/util/string/isSpace
       (i32.const 1)
       (i32.le_u
        (i32.add
         (local.get $1)
         (i32.const -8192)
        )
        (i32.const 10)
       )
      )
     )
     (drop
      (br_if $__inlined_func$~lib/util/string/isSpace
       (i32.const 1)
       (i32.or
        (i32.or
         (i32.or
          (i32.eq
           (local.get $1)
           (i32.const 5760)
          )
          (i32.eq
           (local.get $1)
           (i32.const 8232)
          )
         )
         (i32.or
          (i32.eq
           (local.get $1)
           (i32.const 8233)
          )
          (i32.eq
           (local.get $1)
           (i32.const 8239)
          )
         )
        )
        (i32.or
         (i32.or
          (i32.eq
           (local.get $1)
           (i32.const 8287)
          )
          (i32.eq
           (local.get $1)
           (i32.const 12288)
          )
         )
         (i32.eq
          (local.get $1)
          (i32.const 65279)
         )
        )
       )
      )
     )
     (i32.const 0)
    )
    (block
     (local.set $1
      (i32.load16_u
       (local.tee $0
        (i32.add
         (local.get $0)
         (i32.const 2)
        )
       )
      )
     )
     (local.set $2
      (i32.sub
       (local.get $2)
       (i32.const 1)
      )
     )
     (br $while-continue|0)
    )
   )
  )
  (local.set $3
   (f64.const 1)
  )
  (if
   (if (result i32)
    (select
     (i32.eq
      (if (result i32)
       (select
        (i32.const 1)
        (i32.eq
         (local.get $1)
         (i32.const 43)
        )
        (i32.eq
         (local.get $1)
         (i32.const 45)
        )
       )
       (block (result i32)
        (if
         (i32.eqz
          (local.tee $2
           (i32.sub
            (local.get $2)
            (i32.const 1)
           )
          )
         )
         (return
          (f64.const nan:0x8000000000000)
         )
        )
        (local.set $3
         (select
          (f64.const -1)
          (f64.const 1)
          (i32.eq
           (local.get $1)
           (i32.const 45)
          )
         )
        )
        (i32.load16_u
         (local.tee $0
          (i32.add
           (local.get $0)
           (i32.const 2)
          )
         )
        )
       )
       (local.get $1)
      )
      (i32.const 48)
     )
     (i32.const 0)
     (i32.gt_s
      (local.get $2)
      (i32.const 2)
     )
    )
    (i32.eq
     (i32.or
      (i32.load16_u offset=2
       (local.get $0)
      )
      (i32.const 32)
     )
     (i32.const 120)
    )
    (i32.const 0)
   )
   (local.set $0
    (block (result i32)
     (local.set $2
      (i32.sub
       (local.get $2)
       (i32.const 2)
      )
     )
     (i32.add
      (local.get $0)
      (i32.const 4)
     )
    )
   )
  )
  (loop $while-continue|2
   (block $while-break|2
    (local.set $2
     (i32.sub
      (local.tee $1
       (local.get $2)
      )
      (i32.const 1)
     )
    )
    (if
     (local.get $1)
     (block
      (if
       (i32.ge_u
        (local.tee $1
         (if (result i32)
          (i32.lt_u
           (i32.sub
            (local.tee $1
             (i32.load16_u
              (local.get $0)
             )
            )
            (i32.const 48)
           )
           (i32.const 10)
          )
          (i32.sub
           (local.get $1)
           (i32.const 48)
          )
          (select
           (i32.sub
            (local.get $1)
            (i32.const 55)
           )
           (select
            (i32.sub
             (local.get $1)
             (i32.const 87)
            )
            (local.get $1)
            (i32.le_u
             (i32.sub
              (local.get $1)
              (i32.const 97)
             )
             (i32.const 25)
            )
           )
           (i32.le_u
            (i32.sub
             (local.get $1)
             (i32.const 65)
            )
            (i32.const 25)
           )
          )
         )
        )
        (i32.const 16)
       )
       (block
        (if
         (i64.gt_u
          (i64.sub
           (i64.shl
            (i64.reinterpret_f64
             (local.get $4)
            )
            (i64.const 1)
           )
           (i64.const 2)
          )
          (i64.const -9007199254740994)
         )
         (return
          (f64.const nan:0x8000000000000)
         )
        )
        (br $while-break|2)
       )
      )
      (local.set $4
       (f64.add
        (f64.mul
         (local.get $4)
         (f64.const 16)
        )
        (f64.convert_i32_u
         (local.get $1)
        )
       )
      )
      (local.set $0
       (i32.add
        (local.get $0)
        (i32.const 2)
       )
      )
      (br $while-continue|2)
     )
    )
   )
  )
  (f64.mul
   (local.get $3)
   (local.get $4)
  )
 )
 (func $~lib/as-chain/utils/Utils.hexToBytes (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local.set $4
   (call $~lib/array/Array<u8>#constructor
    (i32.const 0)
   )
  )
  (loop $for-loop|0
   (if
    (i32.gt_s
     (call $~lib/string/String#get:length
      (local.get $0)
     )
     (local.get $2)
    )
    (block
     (block $__inlined_func$~lib/string/String#substr
      (if
       (i32.le_s
        (local.tee $5
         (i32.shl
          (select
           (i32.const 2)
           (local.tee $3
            (i32.sub
             (local.tee $3
              (call $~lib/string/String#get:length
               (local.get $0)
              )
             )
             (block (result i32)
              (if
               (i32.lt_s
                (local.tee $1
                 (local.get $2)
                )
                (i32.const 0)
               )
               (local.set $1
                (select
                 (local.tee $3
                  (i32.add
                   (local.get $1)
                   (local.get $3)
                  )
                 )
                 (i32.const 0)
                 (i32.gt_s
                  (local.get $3)
                  (i32.const 0)
                 )
                )
               )
              )
              (local.get $1)
             )
            )
           )
           (i32.gt_s
            (local.get $3)
            (i32.const 2)
           )
          )
          (i32.const 1)
         )
        )
        (i32.const 0)
       )
       (block
        (local.set $3
         (i32.const 2288)
        )
        (br $__inlined_func$~lib/string/String#substr)
       )
      )
      (call $~lib/memory/memory.copy
       (local.tee $3
        (call $~lib/rt/stub/__new
         (local.get $5)
         (i32.const 1)
        )
       )
       (i32.add
        (local.get $0)
        (i32.shl
         (local.get $1)
         (i32.const 1)
        )
       )
       (local.get $5)
      )
     )
     (local.set $5
      (i32.trunc_f64_u
       (call $~lib/util/string/strtol<f64>
        (local.get $3)
       )
      )
     )
     (call $~lib/array/ensureCapacity
      (local.get $4)
      (local.tee $3
       (i32.add
        (local.tee $1
         (i32.load offset=12
          (local.get $4)
         )
        )
        (i32.const 1)
       )
      )
      (i32.const 0)
     )
     (i32.store8
      (i32.add
       (local.get $1)
       (i32.load offset=4
        (local.get $4)
       )
      )
      (local.get $5)
     )
     (call $~lib/rt/common/OBJECT#set:rtId
      (local.get $4)
      (local.get $3)
     )
     (local.set $2
      (i32.add
       (local.get $2)
       (i32.const 2)
      )
     )
     (br $for-loop|0)
    )
   )
  )
  (local.get $4)
 )
 (func $~lib/array/Array<~lib/as-chain/idxdb/IDXDB>#__get (param $0 i32) (param $1 i32) (result i32)
  (if
   (i32.ge_u
    (local.get $1)
    (i32.load offset=12
     (local.get $0)
    )
   )
   (unreachable)
  )
  (if
   (i32.eqz
    (local.tee $0
     (i32.load
      (i32.add
       (i32.load offset=4
        (local.get $0)
       )
       (i32.shl
        (local.get $1)
        (i32.const 2)
       )
      )
     )
    )
   )
   (unreachable)
  )
  (local.get $0)
 )
 (func $~lib/array/Array<u64>#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $1
    (call $~lib/rt/stub/__new
     (i32.const 16)
     (i32.const 23)
    )
   )
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $1)
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo2
   (local.get $1)
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:rtId
   (local.get $1)
   (i32.const 0)
  )
  (if
   (i32.gt_u
    (local.get $0)
    (i32.const 134217727)
   )
   (unreachable)
  )
  (call $~lib/memory/memory.fill
   (local.tee $3
    (call $~lib/rt/stub/__new
     (local.tee $2
      (i32.shl
       (select
        (local.get $0)
        (i32.const 8)
        (i32.gt_u
         (local.get $0)
         (i32.const 8)
        )
       )
       (i32.const 3)
      )
     )
     (i32.const 0)
    )
   )
   (local.get $2)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $1)
   (local.get $3)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $1)
   (local.get $3)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo2
   (local.get $1)
   (local.get $2)
  )
  (call $~lib/rt/common/OBJECT#set:rtId
   (local.get $1)
   (local.get $0)
  )
  (local.get $1)
 )
 (func $~lib/array/Array<u64>#__set (param $0 i32) (param $1 i32) (param $2 i64)
  (local $3 i32)
  (if
   (i32.ge_u
    (local.get $1)
    (i32.load offset=12
     (local.get $0)
    )
   )
   (block
    (if
     (i32.lt_s
      (local.get $1)
      (i32.const 0)
     )
     (unreachable)
    )
    (call $~lib/array/ensureCapacity
     (local.get $0)
     (local.tee $3
      (i32.add
       (local.get $1)
       (i32.const 1)
      )
     )
     (i32.const 3)
    )
    (call $~lib/rt/common/OBJECT#set:rtId
     (local.get $0)
     (local.get $3)
    )
   )
  )
  (i64.store
   (i32.add
    (i32.load offset=4
     (local.get $0)
    )
    (i32.shl
     (local.get $1)
     (i32.const 3)
    )
   )
   (local.get $2)
  )
 )
 (func $~lib/array/Array<u64>#__get (param $0 i32) (param $1 i32) (result i64)
  (if
   (i32.ge_u
    (local.get $1)
    (i32.load offset=12
     (local.get $0)
    )
   )
   (unreachable)
  )
  (i64.load
   (i32.add
    (i32.load offset=4
     (local.get $0)
    )
    (i32.shl
     (local.get $1)
     (i32.const 3)
    )
   )
  )
 )
 (func $~lib/as-chain/idxdb/SecondaryIterator#constructor (param $0 i32) (param $1 i64) (param $2 i32) (result i32)
  (local $3 i32)
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $3
    (call $~lib/rt/stub/__new
     (i32.const 20)
     (i32.const 22)
    )
   )
   (local.get $0)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:lo2
   (local.get $3)
   (local.get $1)
  )
  (call $~lib/rt/common/OBJECT#set:rtSize
   (local.get $3)
   (local.get $2)
  )
  (local.get $3)
 )
 (func $~lib/as-chain/idxdb/SecondaryIterator#isOk (param $0 i32) (result i32)
  (i32.ge_s
   (i32.load
    (local.get $0)
   )
   (i32.const 0)
  )
 )
 (func $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#set:validPrimary (param $0 i32) (param $1 i32)
  (i32.store8 offset=8
   (local.get $0)
   (local.get $1)
  )
 )
 (func $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#constructor (param $0 i32) (param $1 i32) (param $2 i64) (param $3 i32) (result i32)
  (local $4 i32)
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $4
    (call $~lib/rt/stub/__new
     (i32.const 24)
     (i32.const 24)
    )
   )
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $4)
   (i32.const 0)
  )
  (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#set:validPrimary
   (local.get $4)
   (i32.const 0)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:hi1
   (local.get $4)
   (i64.const 0)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $4)
   (local.get $0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $4)
   (local.get $1)
  )
  (call $~lib/as-chain/bignum/integer/u256/u256#set:hi1
   (local.get $4)
   (local.get $2)
  )
  (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#set:validPrimary
   (local.get $4)
   (local.get $3)
  )
  (local.get $4)
 )
 (func $~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#find (param $0 i32) (param $1 i64) (result i32)
  (local $2 i32)
  (block $__inlined_func$~lib/as-chain/dbi64/DBI64<tables/account.table/TrustedAccount>#find (result i32)
   (if
    (i32.ge_s
     (local.tee $2
      (call $~lib/as-chain/env/db_find_i64
       (i64.load
        (local.tee $0
         (i32.load
          (local.get $0)
         )
        )
       )
       (i64.load offset=8
        (local.get $0)
       )
       (i64.load offset=16
        (local.get $0)
       )
       (local.get $1)
      )
     )
     (i32.const 0)
    )
    (br $__inlined_func$~lib/as-chain/dbi64/DBI64<tables/account.table/TrustedAccount>#find
     (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#constructor
      (local.get $0)
      (local.get $2)
      (local.get $1)
      (i32.const 1)
     )
    )
   )
   (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#constructor
    (local.get $0)
    (local.get $2)
    (i64.const 0)
    (i32.const 0)
   )
  )
 )
 (func $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#isOk (param $0 i32) (result i32)
  (i32.ge_s
   (i32.load offset=4
    (local.get $0)
   )
   (i32.const 0)
  )
 )
 (func $~lib/as-chain/serializer/Decoder#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $1
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 25)
    )
   )
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $1)
   (i32.const 0)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $1)
   (local.get $0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $1)
   (i32.const 0)
  )
  (local.get $1)
 )
 (func $~lib/as-chain/serializer/Decoder#incPos (param $0 i32) (param $1 i32)
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $0)
   (i32.add
    (local.get $1)
    (i32.load offset=4
     (local.get $0)
    )
   )
  )
  (if
   (i32.gt_u
    (i32.load offset=4
     (local.get $0)
    )
    (i32.load offset=12
     (i32.load
      (local.get $0)
     )
    )
   )
   (call $~lib/as-chain/system/check
    (i32.const 0)
    (i32.const 2480)
   )
  )
 )
 (func $~lib/as-chain/serializer/Decoder#unpack (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local.set $2
   (call $~lib/array/Array<u8>#slice
    (i32.load
     (local.get $0)
    )
    (i32.load offset=4
     (local.get $0)
    )
    (i32.load offset=12
     (i32.load
      (local.get $0)
     )
    )
   )
  )
  (block $__inlined_func$~lib/as-chain/serializer/Packer#unpack@virtual
   (block $default
    (block $case4
     (block $case3
      (block $case2
       (block $case1
        (if
         (i32.ne
          (local.tee $3
           (i32.load
            (i32.sub
             (local.get $1)
             (i32.const 8)
            )
           )
          )
          (i32.const 29)
         )
         (block
          (br_if $case1
           (i32.eq
            (local.get $3)
            (i32.const 30)
           )
          )
          (br_if $case2
           (i32.eq
            (local.get $3)
            (i32.const 5)
           )
          )
          (br_if $case3
           (i32.eq
            (local.get $3)
            (i32.const 9)
           )
          )
          (br_if $case4
           (i32.eq
            (local.get $3)
            (i32.const 12)
           )
          )
          (br $default)
         )
        )
        (local.set $1
         (call $xprtrust.contract/addTrustedAccountAction#unpack
          (local.get $1)
          (local.get $2)
         )
        )
        (br $__inlined_func$~lib/as-chain/serializer/Packer#unpack@virtual)
       )
       (local.set $1
        (call $xprtrust.contract/removeTrustedAction#unpack
         (local.get $1)
         (local.get $2)
        )
       )
       (br $__inlined_func$~lib/as-chain/serializer/Packer#unpack@virtual)
      )
      (call $~lib/as-chain/name/Name#set:N
       (local.get $1)
       (call $~lib/as-chain/serializer/Decoder#unpackNumber<u64>
        (call $~lib/as-chain/serializer/Decoder#constructor
         (local.get $2)
        )
       )
      )
      (local.set $1
       (i32.const 8)
      )
      (br $__inlined_func$~lib/as-chain/serializer/Packer#unpack@virtual)
     )
     (local.set $1
      (call $tables/account.table/TrustedAccount#unpack
       (local.get $1)
       (local.get $2)
      )
     )
     (br $__inlined_func$~lib/as-chain/serializer/Packer#unpack@virtual)
    )
    (call $~lib/as-chain/name/Name#set:N
     (local.get $1)
     (call $~lib/as-chain/serializer/Decoder#unpackNumber<u64>
      (local.tee $2
       (call $~lib/as-chain/serializer/Decoder#constructor
        (local.get $2)
       )
      )
     )
    )
    (call $~lib/as-chain/bignum/integer/u256/u256#set:lo2
     (local.get $1)
     (call $~lib/as-chain/serializer/Decoder#unpackNumber<u64>
      (local.get $2)
     )
    )
    (call $~lib/as-chain/bignum/integer/u256/u256#set:hi1
     (local.get $1)
     (call $~lib/as-chain/serializer/Decoder#unpackNumber<u64>
      (local.get $2)
     )
    )
    (call $~lib/as-chain/bignum/integer/u256/u256#set:hi2
     (local.get $1)
     (call $~lib/as-chain/serializer/Decoder#unpackNumber<u64>
      (local.get $2)
     )
    )
    (local.set $1
     (i32.const 32)
    )
    (br $__inlined_func$~lib/as-chain/serializer/Packer#unpack@virtual)
   )
   (unreachable)
  )
  (call $~lib/as-chain/serializer/Decoder#incPos
   (local.get $0)
   (local.get $1)
  )
 )
 (func $tables/account.table/TrustedAccount#unpack (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local.set $1
   (call $~lib/as-chain/serializer/Decoder#constructor
    (local.get $1)
   )
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.tee $2
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 5)
    )
   )
   (i64.const 0)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.get $2)
   (i64.const 0)
  )
  (call $~lib/as-chain/serializer/Decoder#unpack
   (local.get $1)
   (local.get $2)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $0)
   (local.get $2)
  )
  (call $~lib/as-chain/serializer/Decoder#unpack
   (local.get $1)
   (local.tee $2
    (call $~lib/as-chain/bignum/integer/u256/u256#constructor
     (i64.const 0)
     (i64.const 0)
     (i64.const 0)
     (i64.const 0)
    )
   )
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $0)
   (local.get $2)
  )
  (i32.load offset=4
   (local.get $1)
  )
 )
 (func $~lib/as-chain/dbi64/DBI64<tables/account.table/TrustedAccount>#getEx (param $0 i32) (param $1 i32) (result i32)
  (if
   (i32.eqz
    (local.tee $0
     (call $~lib/as-chain/env/db_get_i64
      (local.get $1)
      (i32.const 0)
      (i32.const 0)
     )
    )
   )
   (return
    (i32.const 0)
   )
  )
  (drop
   (call $~lib/as-chain/env/db_get_i64
    (local.get $1)
    (i32.load offset=4
     (local.tee $1
      (call $~lib/array/Array<u8>#constructor
       (local.get $0)
      )
     )
    )
    (local.get $0)
   )
  )
  (global.set $~argumentsLength
   (i32.const 0)
  )
  (drop
   (call $tables/account.table/TrustedAccount#unpack
    (local.tee $0
     (call $tables/account.table/TrustedAccount#constructor@varargs
      (global.get $~lib/as-chain/name/EMPTY_NAME)
     )
    )
    (local.get $1)
   )
  )
  (local.get $0)
 )
 (func $~lib/proton-tsc/modules/store/store/TableStore<tables/account.table/TrustedAccount>#getBySecondaryU256 (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (if
   (i32.eqz
    (block $__inlined_func$~lib/rt/__instanceof (result i32)
     (if
      (i32.le_u
       (local.tee $2
        (i32.load offset=12
         (i32.sub
          (local.tee $3
           (call $~lib/array/Array<~lib/as-chain/idxdb/IDXDB>#__get
            (i32.load offset=4
             (i32.load
              (local.get $0)
             )
            )
            (i32.const 0)
           )
          )
          (i32.const 20)
         )
        )
       )
       (i32.load
        (i32.const 3120)
       )
      )
      (loop $do-continue|0
       (drop
        (br_if $__inlined_func$~lib/rt/__instanceof
         (i32.const 1)
         (i32.eq
          (local.get $2)
          (i32.const 18)
         )
        )
       )
       (br_if $do-continue|0
        (local.tee $2
         (i32.load offset=4
          (i32.add
           (i32.shl
            (local.get $2)
            (i32.const 3)
           )
           (i32.const 3124)
          )
         )
        )
       )
      )
     )
     (i32.const 0)
    )
   )
   (unreachable)
  )
  (local.set $4
   (call $~lib/rt/stub/__alloc
    (i32.const 8)
   )
  )
  (call $~lib/array/Array<u64>#__set
   (local.tee $2
    (call $~lib/array/Array<u64>#constructor
     (i32.const 4)
    )
   )
   (i32.const 0)
   (i64.load
    (local.get $1)
   )
  )
  (call $~lib/array/Array<u64>#__set
   (local.get $2)
   (i32.const 1)
   (i64.load offset=8
    (local.get $1)
   )
  )
  (call $~lib/array/Array<u64>#__set
   (local.get $2)
   (i32.const 2)
   (i64.load offset=16
    (local.get $1)
   )
  )
  (call $~lib/array/Array<u64>#__set
   (local.get $2)
   (i32.const 3)
   (i64.load offset=24
    (local.get $1)
   )
  )
  (local.set $5
   (call $~lib/as-chain/env/db_idx256_lowerbound
    (i64.load
     (local.get $3)
    )
    (i64.load offset=8
     (local.get $3)
    )
    (i64.load offset=16
     (local.get $3)
    )
    (i32.load offset=4
     (local.get $2)
    )
    (i32.const 2)
    (local.get $4)
   )
  )
  (if
   (i32.eqz
    (call $~lib/as-chain/idxdb/SecondaryIterator#isOk
     (local.tee $3
      (if (result i32)
       (if (result i32)
        (if (result i32)
         (if (result i32)
          (i64.eq
           (call $~lib/array/Array<u64>#__get
            (local.get $2)
            (i32.const 0)
           )
           (i64.load
            (local.get $1)
           )
          )
          (i64.eq
           (call $~lib/array/Array<u64>#__get
            (local.get $2)
            (i32.const 1)
           )
           (i64.load offset=8
            (local.get $1)
           )
          )
          (i32.const 0)
         )
         (i64.eq
          (call $~lib/array/Array<u64>#__get
           (local.get $2)
           (i32.const 2)
          )
          (i64.load offset=16
           (local.get $1)
          )
         )
         (i32.const 0)
        )
        (i64.eq
         (call $~lib/array/Array<u64>#__get
          (local.get $2)
          (i32.const 3)
         )
         (i64.load offset=24
          (local.get $1)
         )
        )
        (i32.const 0)
       )
       (call $~lib/as-chain/idxdb/SecondaryIterator#constructor
        (local.get $5)
        (i64.load
         (local.get $4)
        )
        (i32.load offset=24
         (local.get $3)
        )
       )
       (call $~lib/as-chain/idxdb/SecondaryIterator#constructor
        (i32.const -1)
        (i64.const 0)
        (i32.load offset=24
         (local.get $3)
        )
       )
      )
     )
    )
   )
   (return
    (i32.const 0)
   )
  )
  (block $__inlined_func$~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#getByKey (result i32)
   (drop
    (br_if $__inlined_func$~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#getByKey
     (i32.const 0)
     (i32.eqz
      (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#isOk
       (local.tee $0
        (call $~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#find
         (local.tee $2
          (i32.load
           (local.get $0)
          )
         )
         (i64.load offset=8
          (local.get $3)
         )
        )
       )
      )
     )
    )
   )
   (block $__inlined_func$~lib/as-chain/dbi64/DBI64<tables/account.table/TrustedAccount>#get (result i32)
    (local.set $3
     (i32.load
      (local.get $2)
     )
    )
    (drop
     (br_if $__inlined_func$~lib/as-chain/dbi64/DBI64<tables/account.table/TrustedAccount>#get
      (i32.const 0)
      (i32.eqz
       (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#isOk
        (local.get $0)
       )
      )
     )
    )
    (call $~lib/as-chain/dbi64/DBI64<tables/account.table/TrustedAccount>#getEx
     (local.get $3)
     (i32.load offset=4
      (local.get $0)
     )
    )
   )
  )
 )
 (func $tables/account.table/TrustedAccount#getPrimaryValue (param $0 i32) (result i64)
  (i64.load
   (i32.load
    (local.get $0)
   )
  )
 )
 (func $~lib/as-chain/serializer/Encoder#constructor (param $0 i32) (result i32)
  (local $1 i32)
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $1
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 26)
    )
   )
   (i32.const 0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $1)
   (i32.const 0)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $1)
   (call $~lib/array/Array<u8>#constructor
    (local.get $0)
   )
  )
  (local.get $1)
 )
 (func $~lib/as-chain/serializer/Encoder#incPos (param $0 i32) (param $1 i32)
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $0)
   (i32.add
    (local.get $1)
    (i32.load offset=4
     (local.get $0)
    )
   )
  )
  (if
   (i32.gt_u
    (i32.load offset=4
     (local.get $0)
    )
    (i32.load offset=12
     (i32.load
      (local.get $0)
     )
    )
   )
   (call $~lib/as-chain/system/check
    (i32.const 0)
    (i32.const 2720)
   )
  )
 )
 (func $~lib/as-chain/serializer/Encoder#pack (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local.set $2
   (local.get $0)
  )
  (block $__inlined_func$~lib/as-chain/serializer/Packer#pack@virtual
   (block $default
    (block $case4
     (block $case3
      (block $case2
       (block $case1
        (if
         (i32.ne
          (local.tee $0
           (i32.load
            (i32.sub
             (local.get $1)
             (i32.const 8)
            )
           )
          )
          (i32.const 29)
         )
         (block
          (br_if $case1
           (i32.eq
            (local.get $0)
            (i32.const 30)
           )
          )
          (br_if $case2
           (i32.eq
            (local.get $0)
            (i32.const 5)
           )
          )
          (br_if $case3
           (i32.eq
            (local.get $0)
            (i32.const 9)
           )
          )
          (br_if $case4
           (i32.eq
            (local.get $0)
            (i32.const 12)
           )
          )
          (br $default)
         )
        )
        (local.set $0
         (call $xprtrust.contract/addTrustedAccountAction#pack
          (local.get $1)
         )
        )
        (br $__inlined_func$~lib/as-chain/serializer/Packer#pack@virtual)
       )
       (local.set $0
        (call $~lib/as-chain/serializer/Encoder#getBytes
         (call $~lib/as-chain/serializer/Encoder#constructor
          (i32.const 0)
         )
        )
       )
       (br $__inlined_func$~lib/as-chain/serializer/Packer#pack@virtual)
      )
      (i64.store
       (i32.load offset=4
        (local.tee $0
         (call $~lib/array/Array<u8>#constructor
          (i32.const 8)
         )
        )
       )
       (i64.load
        (local.get $1)
       )
      )
      (br $__inlined_func$~lib/as-chain/serializer/Packer#pack@virtual)
     )
     (local.set $0
      (call $tables/account.table/TrustedAccount#pack
       (local.get $1)
      )
     )
     (br $__inlined_func$~lib/as-chain/serializer/Packer#pack@virtual)
    )
    (call $~lib/as-chain/serializer/Encoder#packNumber<u64>
     (local.tee $0
      (call $~lib/as-chain/serializer/Encoder#constructor
       (i32.const 32)
      )
     )
     (i64.load
      (local.get $1)
     )
    )
    (call $~lib/as-chain/serializer/Encoder#packNumber<u64>
     (local.get $0)
     (i64.load offset=8
      (local.get $1)
     )
    )
    (call $~lib/as-chain/serializer/Encoder#packNumber<u64>
     (local.get $0)
     (i64.load offset=16
      (local.get $1)
     )
    )
    (call $~lib/as-chain/serializer/Encoder#packNumber<u64>
     (local.get $0)
     (i64.load offset=24
      (local.get $1)
     )
    )
    (local.set $0
     (call $~lib/as-chain/serializer/Encoder#getBytes
      (local.get $0)
     )
    )
    (br $__inlined_func$~lib/as-chain/serializer/Packer#pack@virtual)
   )
   (unreachable)
  )
  (if
   (i32.lt_u
    (i32.load offset=12
     (i32.load
      (local.get $2)
     )
    )
    (i32.add
     (local.tee $1
      (i32.load offset=12
       (local.get $0)
      )
     )
     (i32.load offset=4
      (local.get $2)
     )
    )
   )
   (call $~lib/as-chain/system/check
    (i32.const 0)
    (i32.const 2640)
   )
  )
  (local.set $0
   (i32.load offset=4
    (local.get $0)
   )
  )
  (local.set $3
   (i32.load offset=4
    (local.get $2)
   )
  )
  (call $~lib/as-chain/serializer/Encoder#incPos
   (local.get $2)
   (local.get $1)
  )
  (drop
   (call $~lib/as-chain/env/memcpy
    (i32.add
     (local.get $3)
     (i32.load offset=4
      (i32.load
       (local.get $2)
      )
     )
    )
    (local.get $0)
    (local.get $1)
   )
  )
 )
 (func $~lib/as-chain/serializer/Encoder#getBytes (param $0 i32) (result i32)
  (call $~lib/array/Array<u8>#slice
   (i32.load
    (local.get $0)
   )
   (i32.const 0)
   (i32.load offset=4
    (local.get $0)
   )
  )
 )
 (func $tables/account.table/TrustedAccount#pack (param $0 i32) (result i32)
  (local $1 i32)
  (call $~lib/as-chain/serializer/Encoder#pack
   (local.tee $1
    (call $~lib/as-chain/serializer/Encoder#constructor
     (block (result i32)
      (drop
       (i32.load
        (local.get $0)
       )
      )
      (drop
       (i32.load offset=4
        (local.get $0)
       )
      )
      (i32.const 40)
     )
    )
   )
   (i32.load
    (local.get $0)
   )
  )
  (call $~lib/as-chain/serializer/Encoder#pack
   (local.get $1)
   (i32.load offset=4
    (local.get $0)
   )
  )
  (call $~lib/as-chain/serializer/Encoder#getBytes
   (local.get $1)
  )
 )
 (func $~lib/as-chain/idxdb/SecondaryValue#constructor (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.tee $2
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 27)
    )
   )
   (local.get $0)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $2)
   (local.get $1)
  )
  (local.get $2)
 )
 (func $~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#store (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i32)
  (local.set $3
   (i32.load
    (local.get $0)
   )
  )
  (local.set $4
   (call $tables/account.table/TrustedAccount#getPrimaryValue
    (local.get $1)
   )
  )
  (local.set $8
   (i64.load
    (local.get $2)
   )
  )
  (local.set $6
   (i32.load offset=12
    (local.tee $5
     (call $tables/account.table/TrustedAccount#pack
      (local.get $1)
     )
    )
   )
  )
  (drop
   (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#constructor
    (local.get $3)
    (call $~lib/as-chain/env/db_store_i64
     (i64.load offset=8
      (local.get $3)
     )
     (i64.load offset=16
      (local.get $3)
     )
     (local.get $8)
     (local.get $4)
     (i32.load offset=4
      (local.get $5)
     )
     (local.get $6)
    )
    (local.get $4)
    (i32.const 1)
   )
  )
  (loop $for-loop|0
   (if
    (i32.lt_s
     (local.get $7)
     (i32.load offset=12
      (i32.load offset=4
       (local.get $0)
      )
     )
    )
    (block
     (local.set $5
      (call $~lib/array/Array<~lib/as-chain/idxdb/IDXDB>#__get
       (i32.load offset=4
        (local.get $0)
       )
       (local.get $7)
      )
     )
     (local.set $4
      (call $tables/account.table/TrustedAccount#getPrimaryValue
       (local.get $1)
      )
     )
     (local.set $3
      (block $__inlined_func$tables/account.table/TrustedAccount#getSecondaryValue (result i32)
       (if
        (i32.eqz
         (local.get $7)
        )
        (block
         (local.set $3
          (i32.load offset=4
           (local.get $1)
          )
         )
         (i64.store
          (local.tee $6
           (i32.load offset=4
            (local.tee $9
             (call $~lib/array/Array<u64>#constructor
              (i32.const 4)
             )
            )
           )
          )
          (i64.load
           (local.get $3)
          )
         )
         (i64.store offset=8
          (local.get $6)
          (i64.load offset=8
           (local.get $3)
          )
         )
         (i64.store offset=16
          (local.get $6)
          (i64.load offset=16
           (local.get $3)
          )
         )
         (i64.store offset=24
          (local.get $6)
          (i64.load offset=24
           (local.get $3)
          )
         )
         (br $__inlined_func$tables/account.table/TrustedAccount#getSecondaryValue
          (call $~lib/as-chain/idxdb/SecondaryValue#constructor
           (i32.const 2)
           (local.get $9)
          )
         )
        )
       )
       (call $~lib/as-chain/system/assert
        (i32.const 0)
        (i32.const 2800)
       )
       (call $~lib/as-chain/idxdb/SecondaryValue#constructor
        (i32.const 0)
        (call $~lib/array/Array<u64>#constructor
         (i32.const 0)
        )
       )
      )
     )
     (local.set $8
      (i64.load
       (local.get $2)
      )
     )
     (block $__inlined_func$~lib/as-chain/idxdb/IDXDB#storeEx@virtual
      (if
       (i32.eq
        (i32.load
         (i32.sub
          (local.get $5)
          (i32.const 8)
         )
        )
        (i32.const 18)
       )
       (block
        (call $~lib/as-chain/system/assert
         (i32.eq
          (i32.load
           (local.get $3)
          )
          (i32.const 2)
         )
         (i32.const 2992)
        )
        (call $~lib/as-chain/system/assert
         (i32.eq
          (i32.load offset=12
           (i32.load offset=4
            (local.get $3)
           )
          )
          (i32.const 4)
         )
         (i32.const 3056)
        )
        (drop
         (call $~lib/as-chain/idxdb/SecondaryIterator#constructor
          (call $~lib/as-chain/env/db_idx256_store
           (i64.load offset=8
            (local.get $5)
           )
           (i64.load offset=16
            (local.get $5)
           )
           (local.get $8)
           (local.get $4)
           (i32.load offset=4
            (i32.load offset=4
             (local.get $3)
            )
           )
           (i32.const 2)
          )
          (local.get $4)
          (i32.load offset=24
           (local.get $5)
          )
         )
        )
        (br $__inlined_func$~lib/as-chain/idxdb/IDXDB#storeEx@virtual)
       )
      )
      (unreachable)
     )
     (local.set $7
      (i32.add
       (local.get $7)
       (i32.const 1)
      )
     )
     (br $for-loop|0)
    )
   )
  )
  (if
   (i64.ge_u
    (local.tee $4
     (call $tables/account.table/TrustedAccount#getPrimaryValue
      (local.get $1)
     )
    )
    (i64.load offset=8
     (local.get $0)
    )
   )
   (call $~lib/as-chain/bignum/integer/u256/u256#set:lo2
    (local.get $0)
    (select
     (i64.const -2)
     (i64.add
      (local.get $4)
      (i64.const 1)
     )
     (i64.ge_u
      (local.get $4)
      (i64.const -2)
     )
    )
   )
  )
 )
 (func $xprtrust.contract/xprtrust#addTrustedAccount (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local.set $3
   (call $~lib/as-chain/env/is_account
    (i64.load
     (local.get $1)
    )
   )
  )
  (i32.store
   (i32.const 2388)
   (call $~lib/as-chain/name/N2S
    (i64.load
     (local.get $1)
    )
   )
  )
  (call $~lib/as-chain/system/check
   (local.get $3)
   (block $__inlined_func$~lib/util/string/joinReferenceArray<~lib/string/String> (result i32)
    (drop
     (br_if $__inlined_func$~lib/util/string/joinReferenceArray<~lib/string/String>
      (i32.const 2288)
      (i32.lt_s
       (local.tee $6
        (i32.sub
         (i32.shr_u
          (i32.load
           (i32.const 2380)
          )
          (i32.const 2)
         )
         (i32.const 1)
        )
       )
       (i32.const 0)
      )
     )
    )
    (if
     (i32.eqz
      (local.get $6)
     )
     (br $__inlined_func$~lib/util/string/joinReferenceArray<~lib/string/String>
      (if (result i32)
       (local.tee $3
        (i32.load
         (i32.const 2384)
        )
       )
       (local.get $3)
       (i32.const 2288)
      )
     )
    )
    (local.set $3
     (i32.const 2288)
    )
    (local.set $8
     (call $~lib/string/String#get:length
      (i32.const 2288)
     )
    )
    (loop $for-loop|0
     (if
      (i32.lt_s
       (local.get $4)
       (local.get $6)
      )
      (block
       (if
        (local.tee $7
         (i32.load
          (i32.add
           (i32.shl
            (local.get $4)
            (i32.const 2)
           )
           (i32.const 2384)
          )
         )
        )
        (local.set $3
         (call $~lib/string/String.__concat
          (local.get $3)
          (local.get $7)
         )
        )
       )
       (if
        (local.get $8)
        (local.set $3
         (call $~lib/string/String.__concat
          (local.get $3)
          (i32.const 2288)
         )
        )
       )
       (local.set $4
        (i32.add
         (local.get $4)
         (i32.const 1)
        )
       )
       (br $for-loop|0)
      )
     )
    )
    (if (result i32)
     (local.tee $7
      (i32.load
       (i32.add
        (i32.shl
         (local.get $6)
         (i32.const 2)
        )
        (i32.const 2384)
       )
      )
     )
     (call $~lib/string/String.__concat
      (local.get $3)
      (local.get $7)
     )
     (local.get $3)
    )
   )
  )
  (if
   (i32.eqz
    (if (result i32)
     (i32.load offset=12
      (local.tee $3
       (call $~lib/as-chain/utils/Utils.hexToBytes
        (local.get $2)
       )
      )
     )
     (i32.eqz
      (i32.and
       (i32.load offset=12
        (local.get $3)
       )
       (i32.const 31)
      )
     )
     (i32.const 0)
    )
   )
   (unreachable)
  )
  (local.set $2
   (call $~lib/as-chain/bignum/integer/u256/u256#constructor
    (i64.load
     (local.tee $2
      (i32.load offset=4
       (local.get $3)
      )
     )
    )
    (i64.load offset=8
     (local.get $2)
    )
    (i64.load offset=16
     (local.get $2)
    )
    (i64.load offset=24
     (local.get $2)
    )
   )
  )
  (call $~lib/as-chain/system/check
   (i32.eqz
    (call $~lib/proton-tsc/modules/store/store/TableStore<tables/account.table/TrustedAccount>#getBySecondaryU256
     (i32.load offset=12
      (local.get $0)
     )
     (local.get $2)
    )
   )
   (i32.const 2576)
  )
  (local.set $2
   (call $tables/account.table/TrustedAccount#constructor
    (local.get $1)
    (local.get $2)
   )
  )
  (local.set $1
   (i32.load
    (local.get $0)
   )
  )
  (local.set $0
   (i32.load offset=12
    (local.get $0)
   )
  )
  (local.set $5
   (call $tables/account.table/TrustedAccount#getPrimaryValue
    (local.get $2)
   )
  )
  (call $~lib/as-chain/system/check
   (i32.eqz
    (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#isOk
     (call $~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#find
      (i32.load
       (local.get $0)
      )
      (local.get $5)
     )
    )
   )
   (i32.const 1200)
  )
  (call $~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#store
   (i32.load
    (local.get $0)
   )
   (local.get $2)
   (local.get $1)
  )
  (if
   (i64.ge_u
    (local.get $5)
    (i64.load offset=8
     (local.get $0)
    )
   )
   (call $~lib/as-chain/bignum/integer/u256/u256#set:lo2
    (local.get $0)
    (select
     (i64.const -2)
     (i64.add
      (local.get $5)
      (i64.const 1)
     )
     (i64.ge_u
      (local.get $5)
      (i64.const -2)
     )
    )
   )
  )
 )
 (func $~lib/proton-tsc/modules/store/store/TableStore<tables/account.table/TrustedAccount>#first (param $0 i32) (result i32)
  (block $__inlined_func$~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#getValue (result i32)
   (drop
    (br_if $__inlined_func$~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#getValue
     (i32.const 0)
     (i32.eqz
      (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#isOk
       (local.tee $0
        (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#constructor
         (local.tee $0
          (i32.load
           (i32.load
            (local.get $0)
           )
          )
         )
         (call $~lib/as-chain/env/db_lowerbound_i64
          (i64.load
           (local.get $0)
          )
          (i64.load offset=8
           (local.get $0)
          )
          (i64.load offset=16
           (local.get $0)
          )
          (i64.const 0)
         )
         (i64.const 0)
         (i32.const 0)
        )
       )
      )
     )
    )
   )
   (call $~lib/as-chain/dbi64/DBI64<tables/account.table/TrustedAccount>#getEx
    (i32.load
     (local.get $0)
    )
    (i32.load offset=4
     (local.get $0)
    )
   )
  )
 )
 (func $~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#removeEx (param $0 i32) (param $1 i64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (call $~lib/as-chain/system/check
   (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#isOk
    (local.tee $2
     (call $~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#find
      (local.get $0)
      (local.get $1)
     )
    )
   )
   (i32.const 2848)
  )
  (drop
   (i32.load
    (local.get $0)
   )
  )
  (call $~lib/as-chain/env/db_remove_i64
   (i32.load offset=4
    (local.get $2)
   )
  )
  (loop $for-loop|0
   (if
    (i32.lt_s
     (local.get $4)
     (i32.load offset=12
      (i32.load offset=4
       (local.get $0)
      )
     )
    )
    (block
     (block $__inlined_func$~lib/as-chain/idxdb/IDXDB#findPrimaryEx@virtual
      (if
       (i32.eq
        (i32.load
         (i32.sub
          (local.tee $3
           (call $~lib/array/Array<~lib/as-chain/idxdb/IDXDB>#__get
            (i32.load offset=4
             (local.get $0)
            )
            (local.get $4)
           )
          )
          (i32.const 8)
         )
        )
        (i32.const 18)
       )
       (block
        (local.set $2
         (call $~lib/rt/stub/__alloc
          (i32.const 32)
         )
        )
        (local.set $5
         (call $~lib/as-chain/idxdb/SecondaryIterator#constructor
          (call $~lib/as-chain/env/db_idx256_find_primary
           (i64.load
            (local.get $3)
           )
           (i64.load offset=8
            (local.get $3)
           )
           (i64.load offset=16
            (local.get $3)
           )
           (local.get $2)
           (i32.const 2)
           (local.get $1)
          )
          (local.get $1)
          (i32.load offset=24
           (local.get $3)
          )
         )
        )
        (call $~lib/array/Array<u64>#__set
         (local.tee $3
          (call $~lib/array/Array<u64>#constructor
           (i32.const 4)
          )
         )
         (i32.const 0)
         (i64.load
          (local.get $2)
         )
        )
        (call $~lib/array/Array<u64>#__set
         (local.get $3)
         (i32.const 1)
         (i64.load offset=8
          (local.get $2)
         )
        )
        (call $~lib/array/Array<u64>#__set
         (local.get $3)
         (i32.const 2)
         (i64.load offset=16
          (local.get $2)
         )
        )
        (call $~lib/array/Array<u64>#__set
         (local.get $3)
         (i32.const 3)
         (i64.load offset=24
          (local.get $2)
         )
        )
        (local.set $3
         (call $~lib/as-chain/idxdb/SecondaryValue#constructor
          (i32.const 2)
          (local.get $3)
         )
        )
        (call $~lib/rt/common/BLOCK#set:mmInfo
         (local.tee $2
          (call $~lib/rt/stub/__new
           (i32.const 8)
           (i32.const 28)
          )
         )
         (local.get $5)
        )
        (call $~lib/rt/common/OBJECT#set:gcInfo
         (local.get $2)
         (local.get $3)
        )
        (br $__inlined_func$~lib/as-chain/idxdb/IDXDB#findPrimaryEx@virtual)
       )
      )
      (unreachable)
     )
     (if
      (call $~lib/as-chain/idxdb/SecondaryIterator#isOk
       (i32.load
        (local.get $2)
       )
      )
      (block $__inlined_func$~lib/as-chain/idxdb/IDXDB#remove@virtual
       (local.set $3
        (call $~lib/array/Array<~lib/as-chain/idxdb/IDXDB>#__get
         (i32.load offset=4
          (local.get $0)
         )
         (local.get $4)
        )
       )
       (local.set $2
        (i32.load
         (local.get $2)
        )
       )
       (if
        (i32.eq
         (i32.load
          (i32.sub
           (local.get $3)
           (i32.const 8)
          )
         )
         (i32.const 18)
        )
        (block
         (call $~lib/as-chain/env/db_idx256_remove
          (i32.load
           (local.get $2)
          )
         )
         (br $__inlined_func$~lib/as-chain/idxdb/IDXDB#remove@virtual)
        )
       )
       (unreachable)
      )
     )
     (local.set $4
      (i32.add
       (local.get $4)
       (i32.const 1)
      )
     )
     (br $for-loop|0)
    )
   )
  )
 )
 (func $xprtrust.contract/xprtrust#removeTrusted (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i64)
  (local.set $1
   (call $~lib/proton-tsc/modules/store/store/TableStore<tables/account.table/TrustedAccount>#first
    (i32.load offset=12
     (local.get $0)
    )
   )
  )
  (loop $while-continue|0
   (if
    (local.get $1)
    (if
     (local.get $1)
     (block
      (local.set $2
       (i32.load offset=12
        (local.get $0)
       )
      )
      (local.set $3
       (call $tables/account.table/TrustedAccount#getPrimaryValue
        (local.get $1)
       )
      )
      (call $~lib/as-chain/system/check
       (call $~lib/as-chain/dbi64/PrimaryIterator<tables/account.table/TrustedAccount>#isOk
        (call $~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#find
         (i32.load
          (local.get $2)
         )
         (local.get $3)
        )
       )
       (i32.const 1648)
      )
      (call $~lib/as-chain/mi/MultiIndex<tables/account.table/TrustedAccount>#removeEx
       (i32.load
        (local.get $2)
       )
       (local.get $3)
      )
      (if
       (i64.eq
        (local.get $3)
        (i64.sub
         (i64.load offset=8
          (local.get $2)
         )
         (i64.const 1)
        )
       )
       (call $~lib/as-chain/bignum/integer/u256/u256#set:lo2
        (local.get $2)
        (i64.const -1)
       )
      )
      (local.set $1
       (call $~lib/proton-tsc/modules/store/store/TableStore<tables/account.table/TrustedAccount>#first
        (i32.load offset=12
         (local.get $0)
        )
       )
      )
      (br $while-continue|0)
     )
    )
   )
  )
 )
 (func $xprtrust.contract/addTrustedAccountAction#unpack (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local.set $1
   (call $~lib/as-chain/serializer/Decoder#constructor
    (local.get $1)
   )
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.tee $2
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 5)
    )
   )
   (i64.const 0)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.get $2)
   (i64.const 0)
  )
  (call $~lib/as-chain/serializer/Decoder#unpack
   (local.get $1)
   (local.get $2)
  )
  (call $~lib/rt/common/BLOCK#set:mmInfo
   (local.get $0)
   (local.get $2)
  )
  (loop $while-continue|0
   (local.set $2
    (i32.load8_u
     (i32.add
      (i32.load offset=4
       (i32.load
        (local.get $1)
       )
      )
      (i32.load offset=4
       (local.get $1)
      )
     )
    )
   )
   (call $~lib/as-chain/serializer/Decoder#incPos
    (local.get $1)
    (i32.const 1)
   )
   (local.set $3
    (i32.or
     (local.get $3)
     (i32.shl
      (i32.and
       (local.get $2)
       (i32.const 127)
      )
      (local.get $4)
     )
    )
   )
   (local.set $4
    (i32.add
     (local.get $4)
     (i32.const 7)
    )
   )
   (local.set $5
    (i32.add
     (local.get $5)
     (i32.const 1)
    )
   )
   (br_if $while-continue|0
    (i32.and
     (local.get $2)
     (i32.const 128)
    )
   )
  )
  (local.set $2
   (call $~lib/array/Array<u8>#slice
    (i32.load
     (local.get $1)
    )
    (i32.load offset=4
     (local.get $1)
    )
    (i32.add
     (local.get $3)
     (i32.load offset=4
      (local.get $1)
     )
    )
   )
  )
  (call $~lib/as-chain/serializer/Decoder#incPos
   (local.get $1)
   (local.get $3)
  )
  (call $~lib/rt/common/OBJECT#set:gcInfo
   (local.get $0)
   (call $~lib/string/String.UTF8.decode
    (i32.load
     (local.get $2)
    )
   )
  )
  (i32.load offset=4
   (local.get $1)
  )
 )
 (func $xprtrust.contract/removeTrustedAction#unpack (param $0 i32) (param $1 i32) (result i32)
  (i32.load offset=4
   (call $~lib/as-chain/serializer/Decoder#constructor
    (local.get $1)
   )
  )
 )
 (func $xprtrust.contract/apply (param $0 i64) (param $1 i64) (param $2 i64)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (call $~lib/as-chain/name/Name#set:N
   (local.tee $3
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 5)
    )
   )
   (i64.const 0)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.get $3)
   (local.get $0)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.tee $6
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 5)
    )
   )
   (i64.const 0)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.get $6)
   (local.get $1)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.tee $5
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 5)
    )
   )
   (i64.const 0)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.get $5)
   (local.get $2)
  )
  (local.set $6
   (call $xprtrust.contract/xprtrust#constructor
    (i32.const 0)
    (local.get $3)
    (local.get $6)
    (local.get $5)
   )
  )
  (drop
   (call $~lib/as-chain/env/read_action_data
    (i32.load offset=4
     (local.tee $5
      (call $~lib/array/Array<u8>#constructor
       (local.tee $3
        (call $~lib/as-chain/env/action_data_size)
       )
      )
     )
    )
    (local.get $3)
   )
  )
  (if
   (i64.eq
    (local.get $0)
    (local.get $1)
   )
   (block
    (if
     (i64.eq
      (local.get $2)
      (i64.const 3607397454930745312)
     )
     (block
      (drop
       (call $xprtrust.contract/addTrustedAccountAction#unpack
        (block (result i32)
         (call $~lib/rt/common/BLOCK#set:mmInfo
          (local.tee $3
           (call $~lib/rt/stub/__new
            (i32.const 8)
            (i32.const 29)
           )
          )
          (i32.const 0)
         )
         (call $~lib/rt/common/OBJECT#set:gcInfo
          (local.get $3)
          (i32.const 2288)
         )
         (local.tee $4
          (local.get $3)
         )
        )
        (local.get $5)
       )
      )
      (if
       (i32.eqz
        (local.tee $3
         (i32.load
          (local.get $3)
         )
        )
       )
       (unreachable)
      )
      (call $xprtrust.contract/xprtrust#addTrustedAccount
       (local.get $6)
       (local.get $3)
       (i32.load offset=4
        (local.get $4)
       )
      )
     )
    )
    (if
     (i64.eq
      (local.get $2)
      (i64.const 5383505038458368512)
     )
     (block
      (drop
       (call $xprtrust.contract/removeTrustedAction#unpack
        (call $~lib/rt/stub/__new
         (i32.const 0)
         (i32.const 30)
        )
        (local.get $5)
       )
      )
      (call $xprtrust.contract/xprtrust#removeTrusted
       (local.get $6)
      )
     )
    )
   )
  )
 )
 (func $~lib/as-chain/serializer/Decoder#unpackNumber<u64> (param $0 i32) (result i64)
  (local $1 i64)
  (local.set $1
   (i64.load
    (i32.add
     (i32.load offset=4
      (i32.load
       (local.get $0)
      )
     )
     (i32.load offset=4
      (local.get $0)
     )
    )
   )
  )
  (call $~lib/as-chain/serializer/Decoder#incPos
   (local.get $0)
   (i32.const 8)
  )
  (local.get $1)
 )
 (func $xprtrust.contract/addTrustedAccountAction#pack (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (if
   (i32.eqz
    (i32.load
     (local.get $0)
    )
   )
   (unreachable)
  )
  (local.set $3
   (call $~lib/arraybuffer/ArrayBuffer#get:byteLength
    (local.tee $1
     (call $~lib/string/String.UTF8.encode
      (i32.load offset=4
       (local.get $0)
      )
      (i32.const 0)
     )
    )
   )
  )
  (loop $while-continue|0
   (local.set $2
    (i32.add
     (local.get $2)
     (i32.const 1)
    )
   )
   (br_if $while-continue|0
    (local.tee $3
     (i32.shr_u
      (local.get $3)
      (i32.const 7)
     )
    )
   )
  )
  (local.set $1
   (call $~lib/as-chain/serializer/Encoder#constructor
    (i32.add
     (i32.add
      (call $~lib/arraybuffer/ArrayBuffer#get:byteLength
       (local.get $1)
      )
      (local.get $2)
     )
     (i32.const 8)
    )
   )
  )
  (if
   (i32.eqz
    (local.tee $3
     (i32.load
      (local.get $0)
     )
    )
   )
   (unreachable)
  )
  (call $~lib/as-chain/serializer/Encoder#pack
   (local.get $1)
   (local.get $3)
  )
  (local.set $2
   (call $~lib/arraybuffer/ArrayBuffer#get:byteLength
    (local.tee $4
     (call $~lib/string/String.UTF8.encode
      (i32.load offset=4
       (local.get $0)
      )
      (i32.const 0)
     )
    )
   )
  )
  (local.set $3
   (i32.const 0)
  )
  (loop $while-continue|00
   (local.set $0
    (i32.load offset=4
     (local.get $1)
    )
   )
   (call $~lib/as-chain/serializer/Encoder#incPos
    (local.get $1)
    (i32.const 1)
   )
   (i32.store8
    (i32.add
     (local.get $0)
     (i32.load offset=4
      (i32.load
       (local.get $1)
      )
     )
    )
    (select
     (i32.or
      (local.tee $0
       (i32.and
        (local.get $2)
        (i32.const 127)
       )
      )
      (i32.const 128)
     )
     (local.get $0)
     (local.tee $2
      (i32.shr_u
       (local.get $2)
       (i32.const 7)
      )
     )
    )
   )
   (local.set $3
    (i32.add
     (local.get $3)
     (i32.const 1)
    )
   )
   (br_if $while-continue|00
    (local.get $2)
   )
  )
  (local.set $0
   (i32.add
    (i32.load offset=4
     (i32.load
      (local.get $1)
     )
    )
    (i32.load offset=4
     (local.get $1)
    )
   )
  )
  (call $~lib/as-chain/serializer/Encoder#incPos
   (local.get $1)
   (call $~lib/arraybuffer/ArrayBuffer#get:byteLength
    (local.get $4)
   )
  )
  (drop
   (call $~lib/as-chain/env/memcpy
    (local.get $0)
    (local.get $4)
    (call $~lib/arraybuffer/ArrayBuffer#get:byteLength
     (local.get $4)
    )
   )
  )
  (drop
   (call $~lib/arraybuffer/ArrayBuffer#get:byteLength
    (local.get $4)
   )
  )
  (call $~lib/as-chain/serializer/Encoder#getBytes
   (local.get $1)
  )
 )
 (func $~lib/as-chain/serializer/Encoder#packNumber<u64> (param $0 i32) (param $1 i64)
  (local $2 i32)
  (local.set $2
   (i32.load offset=4
    (local.get $0)
   )
  )
  (call $~lib/as-chain/serializer/Encoder#incPos
   (local.get $0)
   (i32.const 8)
  )
  (i64.store
   (i32.add
    (local.get $2)
    (i32.load offset=4
     (i32.load
      (local.get $0)
     )
    )
   )
   (local.get $1)
  )
 )
 (func $~start
  (local $0 i32)
  (global.set $~lib/rt/stub/offset
   (i32.const 3372)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.tee $0
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 5)
    )
   )
   (i64.const 0)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.get $0)
   (i64.const 0)
  )
  (global.set $~lib/as-chain/name/EMPTY_NAME
   (local.get $0)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.tee $0
    (call $~lib/rt/stub/__new
     (i32.const 8)
     (i32.const 5)
    )
   )
   (i64.const 0)
  )
  (call $~lib/as-chain/name/Name#set:N
   (local.get $0)
   (i64.const 0)
  )
 )
)
