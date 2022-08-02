using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace LoanManagementWebAPI.Models
{
    public partial class LoanManagementContext : DbContext
    {
        public LoanManagementContext()
        {
        }

        public LoanManagementContext(DbContextOptions<LoanManagementContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblLoanDetail> TblLoanDetails { get; set; }
        public virtual DbSet<TblUserDatum> TblUserData { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TblLoanDetail>(entity =>
            {
                entity.HasKey(e => e.LoanId);

                entity.ToTable("tblLoanDetails");

                entity.Property(e => e.ApplicantFirstName).HasMaxLength(50);

                entity.Property(e => e.ApplicantLastName).HasMaxLength(50);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.LoanTerm).HasMaxLength(50);

                entity.Property(e => e.LoanType).HasMaxLength(50);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<TblUserDatum>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("tblUserData");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.LoginType)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.UpdatedDate).HasColumnType("datetime");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
