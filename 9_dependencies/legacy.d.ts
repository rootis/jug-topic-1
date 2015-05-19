interface Legacy {

    someAction(property: string): number;

}

declare module "legacy/library" {

    export = l;

}

declare var l: Legacy;
