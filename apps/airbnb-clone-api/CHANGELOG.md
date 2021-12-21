# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).

# 1.0.0 (2021-12-21)


### Bug Fixes

* **api:** query pageInfo ([fd36eb7](https://github.com/EikerYejan/airbnb-clone/commit/fd36eb7a350a1c606ce49095be010adb26a9a43c))
* query filters fixes ([b06aee4](https://github.com/EikerYejan/airbnb-clone/commit/b06aee464fb4fe1394de3cffc57142f7d1584dc8))


### Features

* add swagger docs ([fc66425](https://github.com/EikerYejan/airbnb-clone/commit/fc66425864337a54b8ea6bc8aeae3dcbd82f6a97))
* **api:** add address and images fields ([68aac82](https://github.com/EikerYejan/airbnb-clone/commit/68aac82ab8e118bbea4990cebf89eb66b6e2118b))
* **api:** add delete and create listing mutations ([447e034](https://github.com/EikerYejan/airbnb-clone/commit/447e0349904af91db728ca91a4ff6bbd42b2f5a3))
* **api:** add health check endpoint ([7f34fa1](https://github.com/EikerYejan/airbnb-clone/commit/7f34fa1cc59957c614153bcce80cff0ed2e6c625))
* **api:** add list query and updateListing mutation ([7f45938](https://github.com/EikerYejan/airbnb-clone/commit/7f4593800df8fa1737f233f59cedc8582b1e403a))
* **api:** add price, weeklyPrice, monthlyPrice and cleaningFee fields ([e0a98bd](https://github.com/EikerYejan/airbnb-clone/commit/e0a98bdf3609d7807933149b8d4cb808483f7a23))
* **api:** address and country search ([#1](https://github.com/EikerYejan/airbnb-clone/issues/1)) ([8cc6f04](https://github.com/EikerYejan/airbnb-clone/commit/8cc6f0493551472d736939020ebb9470de8c728f))
* **api:** create listing endpoint ([b634ca8](https://github.com/EikerYejan/airbnb-clone/commit/b634ca8138ea81cd3b87988930e915bcaa82fb14))
* **api:** get listings endpoint ([7e7736a](https://github.com/EikerYejan/airbnb-clone/commit/7e7736a8c319460a023dcaf4b9f788ac9fe26d25))
* **api:** implement api key auth ([87448d5](https://github.com/EikerYejan/airbnb-clone/commit/87448d53aa02ce4ebd6b4c26d9b299fd7bd034ec))
* **api:** implement api throttler with graphQL ([4e82b1e](https://github.com/EikerYejan/airbnb-clone/commit/4e82b1ec78403cfa130f59c69035ec36ec1c075c))
* **api:** implement rate limiting ([28efa7d](https://github.com/EikerYejan/airbnb-clone/commit/28efa7d7f6789c55ddddbdf145751278b0e597b1))
* **api:** improve filtering and add sort by field support ([46acd84](https://github.com/EikerYejan/airbnb-clone/commit/46acd8444f1ff3bb556a2e2e350f6e6d916305d3))
* **api:** improve query fields validation ([3fbda55](https://github.com/EikerYejan/airbnb-clone/commit/3fbda5551527fe7bcaad8daee0b9c32116569d08))
* **api:** initial graphql implementation ([b8cd271](https://github.com/EikerYejan/airbnb-clone/commit/b8cd271df2d42c824be1c9fb6811d337612a336f))
* **api:** make reviewsCount optional ([02be8ba](https://github.com/EikerYejan/airbnb-clone/commit/02be8bac4848cb66066772e8646fb76dc5bb7b35))
* **api:** setup prisma service and schema ([840d211](https://github.com/EikerYejan/airbnb-clone/commit/840d211c461d4f6a2ab61af702287c7be1f22417))
* **api:** status monitor page ([#4](https://github.com/EikerYejan/airbnb-clone/issues/4)) ([f8628b8](https://github.com/EikerYejan/airbnb-clone/commit/f8628b8e7517263c8d57f7272f1e23deac68e83f))
* **api:** string filters ([7d932d1](https://github.com/EikerYejan/airbnb-clone/commit/7d932d14497755385775e7d18e8a72ee96eb7532))
* **api:** update schema name and add the last_scraped field ([a08d2c7](https://github.com/EikerYejan/airbnb-clone/commit/a08d2c7e4345c6af0067905d9630ccc443866a24))
* **api:** use Apollo Studio for debugging GraphQL queries ([ad01bb2](https://github.com/EikerYejan/airbnb-clone/commit/ad01bb224255644e91204d9a6458615f4a5f7972))
* **api:** wip: listings service ([c80b278](https://github.com/EikerYejan/airbnb-clone/commit/c80b2787b0f141bc9ad7cd20d9ee40d4ead88c41))
* **api:** wip: return total items that match the query filters ([c5723da](https://github.com/EikerYejan/airbnb-clone/commit/c5723daa750db9bbac3a558fe049b02120023c69))
* **api:** wip: schema typings generation script ([53e44a2](https://github.com/EikerYejan/airbnb-clone/commit/53e44a2e3ccae0a4c4324f1c5e00b09683ce9d7b))
* **graphql-api:** add logic filters for number values ([e509fbe](https://github.com/EikerYejan/airbnb-clone/commit/e509fbee0b2782835db7406d0e92236fa7a500fa))
* **listings-update:** forbid non whitelisted values ([0111ca8](https://github.com/EikerYejan/airbnb-clone/commit/0111ca80713542044fdd3c07aaba08074c4a2d88))
* **listings-utils-service:** update typings ([e0f8c88](https://github.com/EikerYejan/airbnb-clone/commit/e0f8c8831bf263e8783f95bc9bd1861766403fe4))
* **listings:** crud operations endpoints ([11f3072](https://github.com/EikerYejan/airbnb-clone/commit/11f30722d9139eb1605087dd15bd9268798f432d))
* **rest-api:** add logic filters for numbers fiedls ([27cc29c](https://github.com/EikerYejan/airbnb-clone/commit/27cc29c0eaa9847422a1b43a52a0c2378b2086ac))
* **rest-api:** number range search ([#3](https://github.com/EikerYejan/airbnb-clone/issues/3)) ([fc532ed](https://github.com/EikerYejan/airbnb-clone/commit/fc532ed630f6c41b5c8344c6bc76f7f4930446bb))


### Reverts

* revert 667b7ee2c515114cc4c4687ffc197f13a8dd5aa0 ([cfb52b3](https://github.com/EikerYejan/airbnb-clone/commit/cfb52b3644afd7f1dea8c4d67ed9daf4121eb784))



# 0.1.0 (2021-12-21)


### Bug Fixes

* **api:** query pageInfo ([fd36eb7](https://github.com/EikerYejan/airbnb-clone/commit/fd36eb7a350a1c606ce49095be010adb26a9a43c))
* query filters fixes ([b06aee4](https://github.com/EikerYejan/airbnb-clone/commit/b06aee464fb4fe1394de3cffc57142f7d1584dc8))


### Features

* add swagger docs ([fc66425](https://github.com/EikerYejan/airbnb-clone/commit/fc66425864337a54b8ea6bc8aeae3dcbd82f6a97))
* **api:** add address and images fields ([68aac82](https://github.com/EikerYejan/airbnb-clone/commit/68aac82ab8e118bbea4990cebf89eb66b6e2118b))
* **api:** add delete and create listing mutations ([447e034](https://github.com/EikerYejan/airbnb-clone/commit/447e0349904af91db728ca91a4ff6bbd42b2f5a3))
* **api:** add health check endpoint ([7f34fa1](https://github.com/EikerYejan/airbnb-clone/commit/7f34fa1cc59957c614153bcce80cff0ed2e6c625))
* **api:** add list query and updateListing mutation ([7f45938](https://github.com/EikerYejan/airbnb-clone/commit/7f4593800df8fa1737f233f59cedc8582b1e403a))
* **api:** add price, weeklyPrice, monthlyPrice and cleaningFee fields ([e0a98bd](https://github.com/EikerYejan/airbnb-clone/commit/e0a98bdf3609d7807933149b8d4cb808483f7a23))
* **api:** address and country search ([#1](https://github.com/EikerYejan/airbnb-clone/issues/1)) ([8cc6f04](https://github.com/EikerYejan/airbnb-clone/commit/8cc6f0493551472d736939020ebb9470de8c728f))
* **api:** create listing endpoint ([b634ca8](https://github.com/EikerYejan/airbnb-clone/commit/b634ca8138ea81cd3b87988930e915bcaa82fb14))
* **api:** get listings endpoint ([7e7736a](https://github.com/EikerYejan/airbnb-clone/commit/7e7736a8c319460a023dcaf4b9f788ac9fe26d25))
* **api:** implement api key auth ([87448d5](https://github.com/EikerYejan/airbnb-clone/commit/87448d53aa02ce4ebd6b4c26d9b299fd7bd034ec))
* **api:** implement api throttler with graphQL ([4e82b1e](https://github.com/EikerYejan/airbnb-clone/commit/4e82b1ec78403cfa130f59c69035ec36ec1c075c))
* **api:** implement rate limiting ([28efa7d](https://github.com/EikerYejan/airbnb-clone/commit/28efa7d7f6789c55ddddbdf145751278b0e597b1))
* **api:** improve filtering and add sort by field support ([46acd84](https://github.com/EikerYejan/airbnb-clone/commit/46acd8444f1ff3bb556a2e2e350f6e6d916305d3))
* **api:** improve query fields validation ([3fbda55](https://github.com/EikerYejan/airbnb-clone/commit/3fbda5551527fe7bcaad8daee0b9c32116569d08))
* **api:** initial graphql implementation ([b8cd271](https://github.com/EikerYejan/airbnb-clone/commit/b8cd271df2d42c824be1c9fb6811d337612a336f))
* **api:** make reviewsCount optional ([02be8ba](https://github.com/EikerYejan/airbnb-clone/commit/02be8bac4848cb66066772e8646fb76dc5bb7b35))
* **api:** setup prisma service and schema ([840d211](https://github.com/EikerYejan/airbnb-clone/commit/840d211c461d4f6a2ab61af702287c7be1f22417))
* **api:** status monitor page ([21c2130](https://github.com/EikerYejan/airbnb-clone/commit/21c2130b9878c808702143167d3e14391422c8af))
* **api:** string filters ([7d932d1](https://github.com/EikerYejan/airbnb-clone/commit/7d932d14497755385775e7d18e8a72ee96eb7532))
* **api:** update schema name and add the last_scraped field ([a08d2c7](https://github.com/EikerYejan/airbnb-clone/commit/a08d2c7e4345c6af0067905d9630ccc443866a24))
* **api:** use Apollo Studio for debugging GraphQL queries ([ad01bb2](https://github.com/EikerYejan/airbnb-clone/commit/ad01bb224255644e91204d9a6458615f4a5f7972))
* **api:** wip: listings service ([c80b278](https://github.com/EikerYejan/airbnb-clone/commit/c80b2787b0f141bc9ad7cd20d9ee40d4ead88c41))
* **api:** wip: return total items that match the query filters ([c5723da](https://github.com/EikerYejan/airbnb-clone/commit/c5723daa750db9bbac3a558fe049b02120023c69))
* **api:** wip: schema typings generation script ([53e44a2](https://github.com/EikerYejan/airbnb-clone/commit/53e44a2e3ccae0a4c4324f1c5e00b09683ce9d7b))
* **graphql-api:** add logic filters for number values ([e509fbe](https://github.com/EikerYejan/airbnb-clone/commit/e509fbee0b2782835db7406d0e92236fa7a500fa))
* **listings-update:** forbid non whitelisted values ([0111ca8](https://github.com/EikerYejan/airbnb-clone/commit/0111ca80713542044fdd3c07aaba08074c4a2d88))
* **listings-utils-service:** update typings ([e0f8c88](https://github.com/EikerYejan/airbnb-clone/commit/e0f8c8831bf263e8783f95bc9bd1861766403fe4))
* **listings:** crud operations endpoints ([11f3072](https://github.com/EikerYejan/airbnb-clone/commit/11f30722d9139eb1605087dd15bd9268798f432d))
* **rest-api:** add logic filters for numbers fiedls ([27cc29c](https://github.com/EikerYejan/airbnb-clone/commit/27cc29c0eaa9847422a1b43a52a0c2378b2086ac))
* **rest-api:** number range search ([#3](https://github.com/EikerYejan/airbnb-clone/issues/3)) ([fc532ed](https://github.com/EikerYejan/airbnb-clone/commit/fc532ed630f6c41b5c8344c6bc76f7f4930446bb))


### Reverts

* revert 667b7ee2c515114cc4c4687ffc197f13a8dd5aa0 ([cfb52b3](https://github.com/EikerYejan/airbnb-clone/commit/cfb52b3644afd7f1dea8c4d67ed9daf4121eb784))



# 0.1.0 (2021-12-20)


### Bug Fixes

* **api:** query pageInfo ([fd36eb7](https://github.com/EikerYejan/airbnb-clone/commit/fd36eb7a350a1c606ce49095be010adb26a9a43c))
* query filters fixes ([b06aee4](https://github.com/EikerYejan/airbnb-clone/commit/b06aee464fb4fe1394de3cffc57142f7d1584dc8))


### Features

* add swagger docs ([fc66425](https://github.com/EikerYejan/airbnb-clone/commit/fc66425864337a54b8ea6bc8aeae3dcbd82f6a97))
* **api:** add address and images fields ([68aac82](https://github.com/EikerYejan/airbnb-clone/commit/68aac82ab8e118bbea4990cebf89eb66b6e2118b))
* **api:** add delete and create listing mutations ([447e034](https://github.com/EikerYejan/airbnb-clone/commit/447e0349904af91db728ca91a4ff6bbd42b2f5a3))
* **api:** add health check endpoint ([7f34fa1](https://github.com/EikerYejan/airbnb-clone/commit/7f34fa1cc59957c614153bcce80cff0ed2e6c625))
* **api:** add list query and updateListing mutation ([7f45938](https://github.com/EikerYejan/airbnb-clone/commit/7f4593800df8fa1737f233f59cedc8582b1e403a))
* **api:** add price, weeklyPrice, monthlyPrice and cleaningFee fields ([e0a98bd](https://github.com/EikerYejan/airbnb-clone/commit/e0a98bdf3609d7807933149b8d4cb808483f7a23))
* **api:** address and country search ([#1](https://github.com/EikerYejan/airbnb-clone/issues/1)) ([8cc6f04](https://github.com/EikerYejan/airbnb-clone/commit/8cc6f0493551472d736939020ebb9470de8c728f))
* **api:** create listing endpoint ([b634ca8](https://github.com/EikerYejan/airbnb-clone/commit/b634ca8138ea81cd3b87988930e915bcaa82fb14))
* **api:** get listings endpoint ([7e7736a](https://github.com/EikerYejan/airbnb-clone/commit/7e7736a8c319460a023dcaf4b9f788ac9fe26d25))
* **api:** implement api key auth ([87448d5](https://github.com/EikerYejan/airbnb-clone/commit/87448d53aa02ce4ebd6b4c26d9b299fd7bd034ec))
* **api:** implement api throttler with graphQL ([4e82b1e](https://github.com/EikerYejan/airbnb-clone/commit/4e82b1ec78403cfa130f59c69035ec36ec1c075c))
* **api:** implement rate limiting ([28efa7d](https://github.com/EikerYejan/airbnb-clone/commit/28efa7d7f6789c55ddddbdf145751278b0e597b1))
* **api:** improve filtering and add sort by field support ([46acd84](https://github.com/EikerYejan/airbnb-clone/commit/46acd8444f1ff3bb556a2e2e350f6e6d916305d3))
* **api:** improve query fields validation ([3fbda55](https://github.com/EikerYejan/airbnb-clone/commit/3fbda5551527fe7bcaad8daee0b9c32116569d08))
* **api:** initial graphql implementation ([b8cd271](https://github.com/EikerYejan/airbnb-clone/commit/b8cd271df2d42c824be1c9fb6811d337612a336f))
* **api:** make reviewsCount optional ([02be8ba](https://github.com/EikerYejan/airbnb-clone/commit/02be8bac4848cb66066772e8646fb76dc5bb7b35))
* **api:** setup prisma service and schema ([840d211](https://github.com/EikerYejan/airbnb-clone/commit/840d211c461d4f6a2ab61af702287c7be1f22417))
* **api:** string filters ([7d932d1](https://github.com/EikerYejan/airbnb-clone/commit/7d932d14497755385775e7d18e8a72ee96eb7532))
* **api:** update schema name and add the last_scraped field ([a08d2c7](https://github.com/EikerYejan/airbnb-clone/commit/a08d2c7e4345c6af0067905d9630ccc443866a24))
* **api:** use Apollo Studio for debugging GraphQL queries ([ad01bb2](https://github.com/EikerYejan/airbnb-clone/commit/ad01bb224255644e91204d9a6458615f4a5f7972))
* **api:** wip: listings service ([c80b278](https://github.com/EikerYejan/airbnb-clone/commit/c80b2787b0f141bc9ad7cd20d9ee40d4ead88c41))
* **api:** wip: return total items that match the query filters ([c5723da](https://github.com/EikerYejan/airbnb-clone/commit/c5723daa750db9bbac3a558fe049b02120023c69))
* **api:** wip: schema typings generation script ([53e44a2](https://github.com/EikerYejan/airbnb-clone/commit/53e44a2e3ccae0a4c4324f1c5e00b09683ce9d7b))
* **graphql-api:** add logic filters for number values ([e509fbe](https://github.com/EikerYejan/airbnb-clone/commit/e509fbee0b2782835db7406d0e92236fa7a500fa))
* **listings-update:** forbid non whitelisted values ([0111ca8](https://github.com/EikerYejan/airbnb-clone/commit/0111ca80713542044fdd3c07aaba08074c4a2d88))
* **listings-utils-service:** update typings ([e0f8c88](https://github.com/EikerYejan/airbnb-clone/commit/e0f8c8831bf263e8783f95bc9bd1861766403fe4))
* **listings:** crud operations endpoints ([11f3072](https://github.com/EikerYejan/airbnb-clone/commit/11f30722d9139eb1605087dd15bd9268798f432d))
* **rest-api:** add logic filters for numbers fiedls ([27cc29c](https://github.com/EikerYejan/airbnb-clone/commit/27cc29c0eaa9847422a1b43a52a0c2378b2086ac))


### Reverts

* revert 667b7ee2c515114cc4c4687ffc197f13a8dd5aa0 ([cfb52b3](https://github.com/EikerYejan/airbnb-clone/commit/cfb52b3644afd7f1dea8c4d67ed9daf4121eb784))
