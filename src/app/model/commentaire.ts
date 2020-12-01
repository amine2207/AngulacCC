import { Jeux } from './jeux';

export class Commentaire
{
  id: number;
  commentaire: string;
  jeux_id: Jeux;
  date: Date;
}