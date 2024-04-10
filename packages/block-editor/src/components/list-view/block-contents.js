/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { forwardRef, useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import ListViewBlockSelectButton from './block-select-button';
import BlockDraggable from '../block-draggable';
import { store as blockEditorStore } from '../../store';
import { useListViewContext } from './context';

const ListViewBlockContents = forwardRef(
	(
		{
			onClick,
			onToggleExpanded,
			block,
			isSelected,
			position,
			siblingBlockCount,
			level,
			isExpanded,
			selectedClientIds,
			...props
		},
		ref
	) => {
		const { clientId } = block;

		const { blockMovingClientId, selectedBlockInBlockEditor } = useSelect(
			( select ) => {
				const { hasBlockMovingClientId, getSelectedBlockClientId } =
					select( blockEditorStore );
				return {
					blockMovingClientId: hasBlockMovingClientId(),
					selectedBlockInBlockEditor: getSelectedBlockClientId(),
				};
			},
			[]
		);

		const {
			AdditionalBlockContent,
			draggedClientIds,
			insertedBlock,
			listViewInstanceId,
			setInsertedBlock,
			treeGridElementRef,
		} = useListViewContext();

		const isBlockMoveTarget =
			blockMovingClientId && selectedBlockInBlockEditor === clientId;

		const className = classnames( 'block-editor-list-view-block-contents', {
			'is-dropping-before': isBlockMoveTarget,
		} );

		// Only include all selected blocks if the currently clicked on block
		// is one of the selected blocks. This ensures that if a user attempts
		// to drag a block that isn't part of the selection, they're still able
		// to drag it and rearrange its position.
		const draggableClientIds = selectedClientIds.includes( clientId )
			? selectedClientIds
			: [ clientId ];

		// TODO: This function could be moved further up, as it doesn't need to be defined on each block.
		const getFinalPosition = useCallback( () => {
			const targetElem = treeGridElementRef.current?.querySelector(
				`[role=row][data-block="${ draggedClientIds[ 0 ] }"]`
			);

			return targetElem?.getBoundingClientRect();
		}, [ draggedClientIds, treeGridElementRef ] );

		return (
			<>
				{ AdditionalBlockContent && (
					<AdditionalBlockContent
						block={ block }
						insertedBlock={ insertedBlock }
						setInsertedBlock={ setInsertedBlock }
					/>
				) }
				<BlockDraggable
					appendToOwnerDocument
					clientIds={ draggableClientIds }
					cloneClassname={ 'block-editor-list-view-draggable-chip' }
					dragComponent={ null }
					elementId={ `list-view-${ listViewInstanceId }-block-${ clientId }` }
					getFinalPosition={ getFinalPosition }
				>
					{ ( { draggable, onDragStart, onDragEnd } ) => (
						<ListViewBlockSelectButton
							ref={ ref }
							className={ className }
							block={ block }
							onClick={ onClick }
							onToggleExpanded={ onToggleExpanded }
							isSelected={ isSelected }
							position={ position }
							siblingBlockCount={ siblingBlockCount }
							level={ level }
							draggable={ draggable }
							onDragStart={ onDragStart }
							onDragEnd={ onDragEnd }
							isExpanded={ isExpanded }
							{ ...props }
						/>
					) }
				</BlockDraggable>
			</>
		);
	}
);

export default ListViewBlockContents;
