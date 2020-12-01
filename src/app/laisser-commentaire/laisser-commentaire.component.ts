import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire } from '../model/commentaire';
import { CommentsService } from '../shared/comments.service';

@Component({
  selector: 'app-laisser-commentaire',
  templateUrl: './laisser-commentaire.component.html',
  styleUrls: ['./laisser-commentaire.component.css']
})
export class LaisserCommentaireComponent implements OnInit {

  commentaire: Commentaire = new Commentaire();
  constructor(private router : Router, private cs: CommentsService) { }

  ngOnInit(): void {
  }

}
