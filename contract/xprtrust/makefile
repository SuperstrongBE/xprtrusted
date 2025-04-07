prepare:
	echo $(date)
	bun run build
	rm -rf ./deploy && mkdir deploy
	cd ./deploy && mkdir xprtrust
	cd ./../../
	cd ./target && cp ./xprtrust.contract.wasm ./../deploy/xprtrust/xprtrust.contract.wasm && cp ./xprtrust.contract.abi ./../deploy/xprtrust/xprtrust.contract.abi

deploy-testnet:
	cd ./deploy/xprtrust && proton chain:set proton-test && proton contract:set xprtrustify ./ 

deploy-mainnet:
	cd ./deploy/xprtrust && proton chain:set proton && proton contract:set xprtrustify ./ 

feed-ram:
	proton chain:set proton-test && proton faucet:claim XPR xprtrustify || echo "already claimed" && proton ram:buy xprtrustify xprtrustify 450000

testnet:
	make prepare && make deploy-testnet

publish:
	make prepare && make deploy-mainnet