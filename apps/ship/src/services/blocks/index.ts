import { loadReader } from '../../ship-reader';

const runProcess = async () => {
  const { start, close$, traces$ } = await loadReader();
  start();

  
  traces$.subscribe(async (tx:any) => {
    console.log(tx)
  });

  close$.subscribe(() => console.log('Balances process connection closed'));
  console.log('Table process is listening');
};

runProcess();
