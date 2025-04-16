import { Component, NgModule } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { PessoaService } from '../../core/services/pessoa.service';
import { Pessoa } from '../../core/services/types/types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';


@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css'
})
export class PessoaFormComponent {

  titulo = 'Cadastro de Pessoas';

  pessoaId?: number;
  //Defino um objeto pessoa que será incluído ou alterado.
  pessoa: Pessoa = {} as Pessoa;
  constructor(
    private service: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //Verifico se é alteração ou inclusão
    this.pessoaId = Number(this.route.snapshot.params['id']);
    console.log('Buscando pessoa com id:', this.pessoaId);
    if (this.pessoaId) {
      service.buscarPorId(this.pessoaId).subscribe(pessoa => {
        if (pessoa) {
          this.pessoa.id = pessoa.id;
          this.pessoa.nome = pessoa.nome;
          this.pessoa.sobrenome = pessoa.sobrenome;
          this.pessoa.dtNascimento = pessoa.dtNascimento;
        }
      })
    }
  }

  submeter() {
    console.log('submeter() chamado com:', this.pessoa);
    if (this.pessoaId) {
      this.service.editar(this.pessoa).subscribe(() => {
        this.router.navigate(['/pessoa-listagem'])
      })
    } else {
      this.service.incluir(this.pessoa).subscribe(() => {
        this.router.navigate(['/pessoa-listagem'])
      })
    }
  }
}
