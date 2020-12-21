import benchmark from 'benchmark';
import { mylib } from '../../src';

export function run(suite: benchmark.Suite, options: benchmark.Options) {
  suite
    .add('mylib#fn', () => mylib())

  suite
    .on('cycle', function (event: benchmark.Event) {
      console.log(String(event.target));
    })
    .on('complete', function (this: benchmark.Suite) {
      console.log('end')
    })
    ;

  suite.run(options);
}
