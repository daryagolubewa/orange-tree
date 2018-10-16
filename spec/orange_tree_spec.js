describe("OrangeTree", () => {

  let tree;

  beforeEach(() => {
    tree = new OrangeTree();
  });


  // You'll need to switch `xdescribe( o `describe` when you're ready
  //  to implement each set of tests.
  describe("age", () => {
    it("has an age", () => {
      tree1 = new OrangeTree(15, 25)
      expect(tree1.age).toEqual(15);
    });
  });


  describe("height", () => {
    it("has a height", () => {
      tree1 = new OrangeTree(15, 25)
      expect(tree1.height).toEqual(25);
    });
  });


  describe("passGrowingSeason", () => {
    tree1 = new OrangeTree(1, 25)
    testTreeAge = tree1.age
    it("should change the tree age", () => {
      tree1.passGrowingSeason();
      expect(tree1.age).toBeTruthy(tree1.age !== testTreeAge);

    });

    tree2 = new OrangeTree(1, 10)
    testTreeHeight = tree2.height
    it("should make the tree grow", () => {
      tree2.passGrowingSeason();
      expect(tree2.height).toBeTruthy(tree2.height !== testTreeHeight);

    });


    //If the tree is old enough to bear fruit
    it("should cause the tree to produce oranges", () => {
      tree2 = new OrangeTree(1, 10, 140)
      let orangesAmount = tree2.oranges.length;
        expect(tree2.oranges).toBeTruthy(orangesAmount > 0);
    });

  });

  describe("isMature", () => {
    it("returns true if tree is old enough to bear fruit", () => {
      tree1 = new OrangeTree(15, 25)
      expect(tree1.isMature()).toEqual(true);
    });

    it("returns false if tree is not old enough to bear fruit", () => {
      let tree1 = new OrangeTree(5, 10)
      expect(tree1.isMature()).toEqual(false);
    });
  });

  describe("isDead", () => {
    it("should return false for an alive tree", () => {
      tree1 = new OrangeTree(101, 25)
      expect(tree1.isDead()).toEqual(true);
    });

    it("should return true for a dead tree", () => {
      tree1 = new OrangeTree(15, 25)
      expect(tree1.isDead()).toEqual(false);

    });
  });

  describe("hasOranges", () => {
    it("should return true if oranges are on the tree", () => {
      tree1 = new OrangeTree(15, 25, [1, 1])
      expect(tree1.hasOranges()).toEqual(true);
    });

    it("should return false if the tree has no oranges", () => {
      tree1 = new OrangeTree(15, 25, [])
      expect(tree1.hasOranges()).toEqual(false);
    });
  });

  describe("pickAnOrange", () => {
    it("should return an orange from the tree", () => {
      tree1 = new OrangeTree(15, 25, [1, 1])
      expect(tree1.pickAnOrange()).toEqual(1);
    });

    it("the returned orange should no longer be on the tree", () => {
      tree1 = new OrangeTree(15, 25, [1, 1])
      let quantOfOranges = tree1.oranges.length
      expect(tree1.pickAnOrange()).toBeTruthy(quantOfOranges === 1);
    });

    it("should raise an error if the tree has no oranges", () => {
      tree1 = new OrangeTree(15, 25)
      expect(tree1.pickAnOrange()).toEqual("This tree has no oranges");
    });
  });
  describe("averageOrangeDiameter", () => {
    it("should return an orange from the tree", () => {
      tree1 = new OrangeTree(15, 25);
      tree1.passGrowingSeason()
      tree1.averageOrangeDiameter();
      expect(tree1.averageOrangeDiameter()).toBeTruthy(typeof(tree1.averageOrangeDiameter()) == 'number');
    });
  });
});