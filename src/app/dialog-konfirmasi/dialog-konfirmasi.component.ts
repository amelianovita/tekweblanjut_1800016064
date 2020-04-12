import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-konfirmasi',
  templateUrl: './dialog-konfirmasi.component.html',
  styleUrls: ['./dialog-konfirmasi.component.css']
})
export class DialogKonfirmasiComponent implements OnInit {
  

  constructor(  public dialog: MatDialogRef<MatDialogClose>  ) { }

  konfirmasi(){
    this.dialog.close(true);
}
  ngOnInit(): void {
  }


}
