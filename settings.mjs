import { poe } from './tools.mjs';

export const tools = {
  poe: {
    title: ['PoE power budget calculator','PoE 供電預算計算器'],
    fields: [
      ['Number of identical cameras','相同型號鏡頭數量',8,1,1],
      ['Maximum draw per camera (W)','每部鏡頭最大耗電（W）',12,0.1],
      ['Switch per-port limit (W)','交換器每口供電上限（W）',15,0.1],
      ['Switch total power budget (W)','交換器總供電預算（W）',120,0.1],
      ['Extra power allowance (%)','額外預留供電（%）',20,0,'any',100],
    ],
    labels: [['Maximum camera load','鏡頭最高總耗電','W'],['Load with allowance','連預留耗電','W'],['Budget remaining','總供電餘額','W'],['Within each port limit','未超出單口上限'],['Camera capacity by power only','只按供電計算的鏡頭上限']],
    calculate: poe,
    note: ['Check available port count, PoE standards at both ends, and power delivered to the camera after cable losses. Use the manufacturer’s maximum with IR, heater or PTZ enabled where applicable. Deduct other devices from the input budget.', '另行核對可用端口、兩端 PoE 標準及線材損耗後的實際供電。適用時用原廠開啟紅外線、加熱器或 PTZ 的最大耗電；其他裝置先從總預算扣除。'],
  },
};
