/** @param {NS} ns */
export async function main(ns) {
  var tag = ns.getHostname();

  ns.write("/payload/tag.txt", tag)
}
