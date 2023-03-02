import styled from "styled-components"

export const Container = styled.div`
margin-top: 4rem;
table{
    width:100%;
    border-spacing:0 0.5rem;//Utilizamos muito para fazer o espaçamento entre os elementos de uma tabela

    th{
        color:var(--text-body);
        font-weight:400;//Repare que na divisão da tabela (o th é o nome de cada campo referente ao titulo , valor , categoria e data, o tr é a coluna que vai seguir a ordem de acordo com o td seguindo a ordem definida no th, por isso um ta dentro do thead e o outro ta dentro do tbody)
        padding: 1rem 2rem;
        text-align:left
    }
    td{
        padding: 1rem 2rem;
        border:0;
        background:var(--shape);
        color:var(--text-body);
        border-radius:0.25rem;
        
        &.title{
            color: var(--text-title);
        }

        &.deposit{
            color:var(--green);

        }
        &.withdraw{
            color:var(--red)
        }
    }

    
}`;



//Estilizei o "th" que é o cabeçalho da tabela e agora vou estilizar "tb" que é o corpo da tabela