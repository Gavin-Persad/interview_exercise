import { Cache } from 'cache-manager';
import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { ConfigService } from '@nestjs/config';

import { CacheManagerService } from './cache-manager.service';
import { ChatConversationModel } from '../conversation/models/conversation.model';

@Injectable()
export class ConversationCacheManagerService extends CacheManagerService<ChatConversationModel> {
  protected cacheName = 'conversation';
  constructor(
    @Inject(CACHE_MANAGER) cacheManager: Cache,
    configService: ConfigService,
  ) {
    super(cacheManager, configService);
  }
}
