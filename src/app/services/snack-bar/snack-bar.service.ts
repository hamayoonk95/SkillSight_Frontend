// Angular core import
import { Injectable } from '@angular/core';
// Angular Material import
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * SnackbarService is a wrapper around Angular Material's MatSnackBar. It provides
 * an easy-to-use interface for displaying snack-bar notifications
 */
@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {} // Injecting Angular Material's MatSnackBar

  /**
   * Opens a snack-bar with a given message and type.
   *
   * @param message - The message to be displayed in the snack-bar.
   * @param type - The type of the snack-bar which determines its styling ('success' or 'error').
   * @param config - Additional configuration options for the snack-bar.
   */
  open(message: string, type?: 'success' | 'error', config: any = {}) {
    // Define classes for each type of snack-bar
    const typeClasses = {
      success: 'snack-bar-success',
      error: 'snack-bar-error',
    };

    // Determine the panelClass based on the type
    const panelClass = [
      'snack-bar',
      type ? typeClasses[type] : '',
      ...(config.panelClass || []),
    ];

    // Define default configuration for the snack-bar
    const defaultConfig = {
      duration: 10000000,
      verticalPosition: 'top',
      panelClass,
      ...config,
    };

    // Display the snack-bar with the message
    this.snackBar.open(message, 'Close', defaultConfig);
  }
}
