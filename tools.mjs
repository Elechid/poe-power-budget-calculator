export function poe(cameras, watts, port, supply, reserve) {
  const load = cameras * watts;
  const design = load * (1 + reserve / 100);
  return [load, design, supply - design, watts <= port, watts <= port ? Math.floor((supply + 1e-9) / (watts * (1 + reserve / 100))) : 0];
}
