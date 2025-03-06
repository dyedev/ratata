{
  # Requires staging-next due to rust 1.85
  inputs.nixpkgs.url = "github:nixos/nixpkgs/staging-next";
  inputs.systems.url = "github:nix-systems/default";

  outputs =
    {
      self,
      systems,
      nixpkgs,
      ...
    }:
    let
      eachSystem = nixpkgs.lib.genAttrs (import systems);
    in
    {
      packages = eachSystem (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        with pkgs;
        {
          ratata = callPackage ./package.nix { };
        }
      );
      devShells = eachSystem (
        system:
        let
          pkgs = nixpkgs.legacyPackages.${system};
        in
        with pkgs;
        {
          default = mkShell {
            nativeBuildInputs = [
              nodejs_23
              yarn-berry
            ];
          };
        }
      );
    };
}
