using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Jacarometro_WebAPI.Migrations
{
    public partial class JacarometroBD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Funcionarios",
                columns: table => new
                {
                    FuncionarioId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Login = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Funcionarios", x => x.FuncionarioId);
                });

            migrationBuilder.CreateTable(
                name: "Vacinas",
                columns: table => new
                {
                    VacinaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PeriodoDose = table.Column<int>(type: "int", nullable: false),
                    TipoIntervalo = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vacinas", x => x.VacinaId);
                });

            migrationBuilder.CreateTable(
                name: "VacinasFuncionarios",
                columns: table => new
                {
                    VacinaFuncionarioId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    VacinaId = table.Column<int>(type: "int", nullable: false),
                    FuncionarioId = table.Column<int>(type: "int", nullable: false),
                    DataPrimeiraDose = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VacinasFuncionarios", x => x.VacinaFuncionarioId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Funcionarios");

            migrationBuilder.DropTable(
                name: "Vacinas");

            migrationBuilder.DropTable(
                name: "VacinasFuncionarios");
        }
    }
}
