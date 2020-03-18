<?php

use App\Models\ProductVariationTypes;
use Faker\Generator as Faker;

$factory->define(ProductVariationTypes::class, function (Faker $faker) {
    return [
        'name' => $faker->unique()->name
    ];
});
