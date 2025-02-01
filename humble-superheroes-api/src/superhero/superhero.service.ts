import { Injectable } from '@nestjs/common';
import { Superhero } from 'src/superhero/superhero';

/**
 * Represents a node in the binary search tree
 */
class TreeNode {
  data: Superhero;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(data: Superhero) {
    this.data = data;
  }
}

/**
 * Binary search tree for storing superheroes sorted by humility
 */
class BinarySearchTree {
  private root: TreeNode = null;
  private sortedList: Superhero[] = [];

  /**
   * Inserts a superhero into the tree and updates the sorted list
   */
  insert(data: Superhero) {
    this.root = this._insert(this.root, data);
    this.sortedList = [];
    this._inOrder(this.root);
  }

  private _insert(node: TreeNode, data: Superhero): TreeNode {
    if (!node) return { data, left: null, right: null };

    const direction = data.humility < node.data.humility ? 'left' : 'right';
    node[direction] = this._insert(node[direction] ?? null, data);

    return node;
  }

  /**
   * Traverses the tree in order and updates the sorted list
   */
  private _inOrder(node: TreeNode): void {
    if (!node) return;
    this._inOrder(node.right);
    this.sortedList.push(node.data);
    this._inOrder(node.left);
  }

  /**
   * Returns superheroes sorted by humility
   */
  get superheroes(): Superhero[] {
    return this.sortedList;
  }
}

/**
 * Generates a random avatar URL
 * API: https://avatar-placeholder.iran.liara.run/
 */
const generateAvatar = () =>
  `https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 100) + 1}`;

@Injectable()
export class SuperheroService {
  private bst = new BinarySearchTree();

  /**
   * Retrieves superheroes sorted by humility
   */
  getSuperheroes(): Superhero[] {
    return this.bst.superheroes;
  }

  /**
   * Creates a new superhero, assigns an avatar if missing, and inserts into the tree
   */
  createSuperhero(data: Superhero): Superhero {
    const { avatar = null } = data;

    const superhero = {
      ...data,
      avatar: avatar || generateAvatar(),
    };

    this.bst.insert(superhero);

    return superhero;
  }
}
