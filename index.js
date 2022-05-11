const nftName = "jogakbo"; // name of nft
const description = "test for jogakbo"; // description of nft
const hiddenImgUrl =
  "ipfs://QmZZycTQTcHiwcvhD5m6ziYtnJ6MrVdM8WCNeEqoPMjZ3a/downyDog.png";
const totalNum = 5; // amount of nfts

try {
  for (let i = 1; i <= totalNum; i++) {
    let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
    let fs = require("fs");
    fs.writeFile(`json/${i}.json`, json, "utf8", (e) => e);
  }
  console.log("complete!");
} catch (error) {
  console.log(error);
}
