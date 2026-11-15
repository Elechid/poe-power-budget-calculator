import { poe } from './tools.mjs';

export const tools = {
  poe: {
    title: ['PoE power budget calculator','PoE 供電預算計算器'],
    fields: [["Group A camera count", "A 組鏡頭數", 4, 0, 1], ["Group A maximum per camera (W)", "A 組每部最大耗電（W）", 8, 0], ["Group B camera count", "B 組鏡頭數", 2, 0, 1], ["Group B maximum per camera (W)", "B 組每部最大耗電（W）", 18, 0], ["Available PoE ports", "可用 PoE 端口數", 8, 0, 1], ["Power limit per port (W)", "每口供電上限（W）", 30, 0.1], ["Available total PoE budget (W)", "可用總供電預算（W）", 120, 0.1], ["Extra allowance (%)", "額外預留（%）", 20, 0, "any", 100]],
    labels: [["Combined maximum load", "最高總耗電", "W"], ["Load with allowance", "連預留耗電", "W"], ["Total power remaining", "總供電餘額", "W"], ["Each camera fits per-port limit", "每部均在單口上限內"], ["Ports remaining", "剩餘端口"]],
    guide: "poe-camera-nvr-system-planning-hong-kong",
    intro: ["Example: four 8 W and two 18 W cameras use 68 W, or 81.6 W with 20% reserve. Deduct power and ports already in use before entering the available budget.", "例如 4 部 8 W 加 2 部 18 W，共 68 W；加 20% 預留為 81.6 W。請先扣除其他裝置已使用的供電及端口。"],
    calculate: poe,
    note: ['Check available port count, PoE standards at both ends, and power delivered to the camera after cable losses. Use the manufacturer’s maximum with IR, heater or PTZ enabled where applicable. Deduct other devices from the input budget.', '另行核對可用端口、兩端 PoE 標準及線材損耗後的實際供電。適用時用原廠開啟紅外線、加熱器或 PTZ 的最大耗電；其他裝置先從總預算扣除。'],
  },
};
