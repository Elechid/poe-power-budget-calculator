export function poe(a,wa,b,wb,ports,port,budget,reserve) {
  if ((a && !wa) || (b && !wb)) throw new RangeError();
  const load=a*wa+b*wb;
  const plan=load*(1+reserve/100);
  return [load,plan,budget-plan,(!a||wa<=port)&&(!b||wb<=port),ports-a-b];
}
