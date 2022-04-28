import { IDisposable, DisposableDelegate } from '@lumino/disposable';

import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import {
    INotebookTracker
} from '@jupyterlab/notebook';

import {
    Cell, CodeCell, MarkdownCell
} from '@jupyterlab/cells';

import { ToolbarButton } from '@jupyterlab/apputils';

import { DocumentRegistry } from '@jupyterlab/docregistry';

import {
    NotebookActions,
    NotebookPanel,
    INotebookModel,
} from '@jupyterlab/notebook';

/**
 * The plugin registration information.
 */
const plugin: JupyterFrontEndPlugin<void> = {
    activate,
    id: 'toolbar-button',
    autoStart: true,
};


export class ModelValueMutableCodeCell
    implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel>
{
    /**
     * Create a new extension for the notebook panel widget.
     *
     * @param panel Notebook panel
     * @param context Notebook context
     * @returns Disposable on the added button
     */
    createNew(
        panel: NotebookPanel,
        context: DocumentRegistry.IContext<INotebookModel>
    ): IDisposable {

            CodeCell.model.value =
        const clearOutput = () => {
            NotebookActions.clearAllOutputs(panel.content);
        };
        const button = new ToolbarButton({
            className: 'clear-output-button',
            label: 'Clear All Outputs',
            onClick: clearOutput,
            tooltip: 'Clear All Outputs',
        });

        panel.toolbar.insertItem(10, 'clearOutputs', button);
        return new DisposableDelegate(() => {
            button.dispose();
        });
    }
}



/**
 * A notebook widget extension that adds a button to the toolbar.
 */
export class ButtonExtension
    implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel>
{
    /**
     * Create a new extension for the notebook panel widget.
     *
     * @param panel Notebook panel
     * @param context Notebook context
     * @returns Disposable on the added button
     */
    createNew(
        panel: NotebookPanel,
        context: DocumentRegistry.IContext<INotebookModel>
    ): IDisposable {
        CodeCell.
        CodeCell.model.value =
        const clearOutput = () => {
            NotebookActions.clearAllOutputs(panel.content);
        };
        const button = new ToolbarButton({
            className: 'clear-output-button',
            label: 'Clear All Outputs',
            onClick: clearOutput,
            tooltip: 'Clear All Outputs',
        });

        panel.toolbar.insertItem(10, 'clearOutputs', button);
        return new DisposableDelegate(() => {
            button.dispose();
        });
    }
}

/**
 * Activate the extension.
 *
 * @param app Main application object
 */
function activate(app: JupyterFrontEnd): void {
    app.docRegistry.addWidgetExtension('Notebook', new ButtonExtension());
}

/**
 * Export the plugin as default.
 */
export default plugin;
