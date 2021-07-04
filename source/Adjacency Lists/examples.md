## **Undirected Adjacency List Implementation in JavaScript**

```
const undirectedAdjList = {

James: ["Jeff"],
Jill: ["Jenny"],
Jenny: ["Jeff", "Jill", "Jeff"],
Jeff: ["James", "Jenny"],

};
```

## **An example of adjacency matrix of an undirected graph with five nodes.**

#### The five nodes have relationships between:

- **the first and fourth node,**

- **the first and third node,**

- **the third and fifth node,**

- **and the fourth and fifth node.**

All edge weights are one.

---

```
const adjMatUndirected = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0],
];
```

![](https://miro.medium.com/max/1482/1*CCupDqqO41n9VW4bc8zaTg.png)
