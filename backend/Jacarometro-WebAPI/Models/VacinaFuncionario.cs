using System;

namespace Jacarometro_WebAPI.Models
{
    public class VacinaFuncionario
    {
        public int Id { get; set; }
        public int VacinaId { get; set; }
        public int FuncionarioId { get; set; }
        public DateTime DataPrimeiraDose { get; set; }
        public DateTime DataSegundaDose { get; set; }
    }
}