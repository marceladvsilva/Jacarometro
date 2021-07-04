using Microsoft.EntityFrameworkCore;

namespace Jacarometro_WebAPI.Models
{
    public class Contexto : DbContext
    {
        public DbSet<Vacina> Vacinas { get; set; }
        public DbSet<Funcionario> Funcionarios { get; set; }
        public DbSet<VacinaFuncionario> VacinasFuncionarios { get; set; }

        public Contexto(DbContextOptions<Contexto> opcoes) : base(opcoes)
        {
            
        }

    }
}