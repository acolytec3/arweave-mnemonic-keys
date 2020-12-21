// NOTE: this is here only for loading your benchmarks
// so be careful when or if you want to modify this file

import fs from 'fs';
import path from 'path';
import Benchmark from 'benchmark';

const benchmarkdir = __dirname;
const testsdir = path.join(benchmarkdir, 'tests');
const benchmarks = fs.readdirSync(testsdir);

benchmarks.forEach(mark => {
  const modpath = path.join(testsdir, mark);
  const mod = require(modpath);

  if (typeof mod.run === 'function') {
    mod.run(new Benchmark.Suite(), { async: true });
  } else {
    console.warn(`Benchmark run not found for benchmark ${mark}`);
  }
});
