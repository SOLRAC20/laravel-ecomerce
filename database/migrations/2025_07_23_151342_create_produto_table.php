<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('produto', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vendedor_id')->constrained('vendedor')->onDelete('cascade');
            $table->string('nome');
            $table->text('descricao');
            $table->foreignId('prodImage_id')->nullable()->constrained('product_images')->onDelete('set null');
            $table->foreignId('categoria_id')->constrained('categoria_prod')->onDelete('cascade');
            $table->decimal('preco', 10, 2);
            $table->date('data_pubblicacao');
            $table->enum('status', ['ativo', 'inativo', 'pendente']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produto');
    }
};
