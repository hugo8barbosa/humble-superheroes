// ---------------- DOCS ----------------
// Class Validator: https://github.com/typestack/class-validator
// Class Transformer: https://github.com/typestack/class-transformer

import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * Represents a superhero entity with validation and transformation rules
 */
export class Superhero {
  /**
   * Superhero name (Required, trimmed string)
   */
  @ApiProperty({
    type: String,
    description: 'Superhero name',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  name: string;

  /**
   * Superhero superpower (Required, trimmed string)
   */
  @ApiProperty({
    type: String,
    description: 'Superhero superpower',
  })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  superpower: string;

  /**
   * Humility score (Required, integer between 1 and 10)
   */
  @ApiProperty({
    type: Number,
    description: 'Superhero humility score 1 - 10',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(10)
  @Type(() => Number)
  humility: number;

  /**
   * Superhero avatar (Optional, trimmed string)
   */
  @ApiPropertyOptional({
    type: String,
    description: 'Superhero avatar',
  })
  @IsString()
  @Transform(({ value }) => value?.trim())
  avatar: string;
}
