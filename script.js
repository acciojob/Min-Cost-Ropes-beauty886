function mincost(arr) { 
  let cost = 0;

  while (arr.length > 1) {
    // sort array to get two smallest ropes
    arr.sort((a, b) => a - b);

    // take two smallest
    let first = arr[0];
    let second = arr[1];

    // merge cost
    let merged = first + second;
    cost += merged;

    // remove first two and push merged
    arr.splice(0, 2);
    arr.push(merged);
  }

  return cost;
}

module.exports = mincost;
