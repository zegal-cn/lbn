import { Entity, model, property } from '@loopback/repository';

@model()
export class Project extends Entity {
  @property({type: 'number', id: true})
  id: number;

  @property({type: 'string', required: true})
  name: string;
}
