import instance from '../instance';

function overview(opts) {
  let url = '/statisticsdata/getWorkingEventCount'
  return instance('get', url, opts)
} 

export {
  overview
};