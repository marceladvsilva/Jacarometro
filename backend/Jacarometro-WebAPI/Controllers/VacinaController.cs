using System.Collections.Generic;
using System.Threading.Tasks;
using Jacarometro_WebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Jacarometro_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VacinaController : ControllerBase
    {
        public readonly Contexto _contexto;

        public VacinaController(Contexto conteto)
        {
            _contexto = conteto;
        }

        // [HttpGet]
        // public async Task<IActionResult> Get()
        // {
        //     try
        //     {
        //         var result = await _contexto.GetAllVacinasAsync(true);
        //         return Ok(result);
        //     }
        //     catch (System.Exception ex)
        //     { 
        //         return BadRequest($"Erro: {ex.Message}");
        //     } 
        // }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vacina>>> GetAllAsync(){
            return await _contexto.Vacinas.ToListAsync();
        }


        [HttpGet("{vacinaId}")]
        public async Task<ActionResult<Vacina>> GetByVacinaIdAsync(int vacinaId){
            Vacina vacina = await _contexto.Vacinas.FindAsync(vacinaId);

            if(vacina == null)
                return NotFound();
            
            return vacina;
        }

        [HttpPost]
        public async Task<ActionResult<Vacina>> SaveVacinadAsync(Vacina vacina){

            await _contexto.Vacinas.AddAsync(vacina);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> UpdateVacinaaAsync(Vacina vacina){
            _contexto.Vacinas.Update(vacina);
            await _contexto.SaveChangesAsync();
            
            return Ok();
        }

        [HttpDelete("{vacinaId}")]
        public async Task<ActionResult> ExcluirPessoaAsync(int vacinaId){
            Vacina vacina = await _contexto.Vacinas.FindAsync(vacinaId);
            if(vacina == null)
                return NotFound();

            _contexto.Vacinas.Remove(vacina);
            await _contexto.SaveChangesAsync();
            
            return Ok();
        }


        
    }
}