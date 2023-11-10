/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as admin from 'firebase-admin';
import {logger} from 'firebase-functions/v1';

import config from '../config';

export async function onCompleteHandler(payload: any) {
  logger.info('build event completed!');
  logger.info(`Message ===> ${JSON.stringify(payload)}`);

  await admin
    .firestore()
    .doc(config.cloudBuildDoc)
    .update({status: 'staged', ...payload});
}