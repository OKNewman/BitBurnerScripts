/** @param {NS} ns */
export async function main(ns) {
  var target = ns.read("/payload/tag.txt")
  //var target = ns.getHostname();
  
  while (true) {
    await ns.grow(target)
    await ns.weaken(target)
    await ns.hack(target)
  }
}
