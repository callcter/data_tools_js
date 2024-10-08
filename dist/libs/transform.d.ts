export declare function list2Dict(lst: any[], key: string, contentKey: string | undefined): any;
export declare function list2Tree(listData: any[], options?: {
    key: string;
    parent: string;
}): unknown[];
export declare function tree2List(treeData: any[], options?: {
    key: string;
    parent: string;
}): any[];
