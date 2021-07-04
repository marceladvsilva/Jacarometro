using System.Collections.Generic;
using System.Threading.Tasks;
using Jacarometro_WebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Jacarometro_WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class FuncionarioController : ControllerBase
    {
        public readonly Contexto _contexto;

        public FuncionarioController(Contexto conteto)
        {
            _contexto = conteto;
        }

        // [HttpGet]
        // public async Task<IActionResult> Get()
        // {
        //     try
        //     {
        //         var result = await _contexto.GetAllFuncionariosAsync(true);
        //         return Ok(result);
        //     }
        //     catch (System.Exception ex)
        //     { 
        //         return BadRequest($"Erro: {ex.Message}");
        //     } 
        // }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Funcionario>>> GetAllAsync(){
            return await _contexto.Funcionarios.ToListAsync();
        }

        [HttpGet("{funcionarioId}")]
        public async Task<ActionResult<Funcionario>> GetByFuncionarioIdAsync(int funcionarioId){
            Funcionario funcionario = await _contexto.Funcionarios.FindAsync(funcionarioId);

            if(funcionario == null)
                return NotFound();
            
            return funcionario;
        }

        [HttpPost]
        public async Task<ActionResult<Funcionario>> SaveFuncionarioAsync(Funcionario funcionario){

            await _contexto.Funcionarios.AddAsync(funcionario);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> UpdateFuncionarioaAsync(Funcionario funcionario){
            _contexto.Funcionarios.Update(funcionario);
            await _contexto.SaveChangesAsync();
            
            return Ok();
        }

        [HttpDelete("{funcionarioId}")]
        public async Task<ActionResult> ExcluirPessoaAsync(int funcionarioId){
            Funcionario funcionario = await _contexto.Funcionarios.FindAsync(funcionarioId);
            if(funcionario == null)
                return NotFound();

            _contexto.Funcionarios.Remove(funcionario);
            await _contexto.SaveChangesAsync();
            
            return Ok();
        }


        
    }
}