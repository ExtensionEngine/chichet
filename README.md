# Chichet - (not a Pokémon)

Realtime chat room app.

## To run the project

Add the `.env` file to the root of the project following the example set in .env.example

```
$ docker compose up
```

## To start the project in developer mode

Add the `.env` file to the root of the project following the example set in .env.example

```
$ pnpm install && (cd backend && pnpm install) && (cd frontend && pnpm install)
$ docker compose up
```

### To install/uninstall a package

Stop local server!

```
$ cd backend    // or frontend
$ pnpm install package-name
$ pnpm uninstall package-name
```

Make sure not to use `pnpm add/remove`!!!!!

### Run migrations and seeders

Server needs to be running (or local postgres)

```
cd backend
pnpm migration:run
pnpm seed:run
```

### Working with models, migrations and seeders

Make sure to change model extension to `.ts`

```
cd backend

pnpm model:create <name>        // creates a new file in src. Change the extension and add it to the folder of the same name
pnpm migrations:create <name>   // creates a new file in src/shared/database/migrations(look at current migrations for reference)
pnpm seed:create                // creates a new file in src/shared/database/seeders (look at current seeders for reference)

pnpm migration:undo             // reverts the last migration run
pnpm migration:undo:all         // reverts all the migrations
pnpm seed:undo                  // reverts the last seeder run
pnpm seed:undo:all              // reverts all the seeders
```
