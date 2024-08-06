# Migration Commands

- migration:generate

- migration:create

- migration:revert

- migration:run


## Flags

- d - dataSource

- t - timestamp


# Entity Listeners and Subscribers

## Listeners

Listeners são hooks de estado da entidade.

- @AfterLoad
- @BeforeInsert
- @AfterInsert
- @BeforeUpdate
- @AfterUpdate
- @BeforeRemove
- @AfterRemove
- @BeforeSoftRemove
- @AfterSoftRemove
- @BeforeRecover
- @AfterRecover

## Subscribers

É uma classe que implementa a interface `EntitySubscriberInterface` e a anotação `@EventSubscriber`. Ela permite ouvir os hooks de listeners.