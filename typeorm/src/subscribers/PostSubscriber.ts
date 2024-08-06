import { EventSubscriber, RecoverEvent } from "typeorm";
import { EntitySubscriberInterface } from "typeorm/browser";
import Post from "../entities/Post";

@EventSubscriber()
export default class PostSubscriber implements EntitySubscriberInterface<Post> {

    afterRecover(event: RecoverEvent<Post>): Promise<any> | void {
       console.log('AFTER RECOVER THIS POST');
       console.log(`THE SPEFICATION ID IS ${event.entity.id}`);
    }
}