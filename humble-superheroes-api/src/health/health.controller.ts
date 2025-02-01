import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

/**
 * Controller for checking API health status
 */
@ApiTags('Health')
@Controller({ version: VERSION_NEUTRAL, path: 'health' })
export class HealthCheckController {
  /**
   * Returns a health check message
   */
  @Get()
  @ApiOperation({ summary: 'Check service healthiness' })
  healthCheck() {
    return { message: 'Welcome to Humble Superheroes API!' };
  }
}
