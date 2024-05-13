/**
 * WordPress dependencies
 */
import {
	BlockSettingsMenuControls,
	__unstableBlockSettingsMenuFirstItem as BlockSettingsMenuFirstItem,
	store as blockEditorStore,
	useBlockDisplayInformation,
} from '@wordpress/block-editor';
import { store as coreStore } from '@wordpress/core-data';
import { __experimentalText as Text, MenuItem } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { store as editorStore } from '../../store';
import { unlock } from '../../lock-unlock';

function ContentOnlySettingsMenuItems( { clientId, onClose } ) {
	const { entity, onNavigateToEntityRecord } = useSelect(
		( select ) => {
			const {
				getBlockEditingMode,
				getBlockParentsByBlockName,
				getSettings,
				getBlockAttributes,
			} = select( blockEditorStore );
			const contentOnly =
				getBlockEditingMode( clientId ) === 'contentOnly';
			if ( ! contentOnly ) {
				return {};
			}
			const patternParent = getBlockParentsByBlockName(
				clientId,
				'core/block',
				true
			)[ 0 ];

			let record;
			if ( patternParent ) {
				record = select( coreStore ).getEntityRecord(
					'postType',
					'wp_block',
					getBlockAttributes( patternParent ).ref
				);
			} else {
				const { getCurrentPostType, getCurrentTemplateId } =
					select( editorStore );
				const currentPostType = getCurrentPostType();
				const templateId = getCurrentTemplateId();
				if ( currentPostType === 'page' && templateId ) {
					record = select( coreStore ).getEntityRecord(
						'postType',
						'wp_template',
						templateId
					);
				}
			}
			return {
				entity: record,
				onNavigateToEntityRecord:
					getSettings().onNavigateToEntityRecord,
			};
		},
		[ clientId ]
	);

	if ( ! entity ) {
		return (
			<TemplateLockContentOnlyMenuItems
				clientId={ clientId }
				onClose={ onClose }
			/>
		);
	}

	const isPattern = entity.type === 'wp_block';

	return (
		<>
			<BlockSettingsMenuFirstItem>
				<MenuItem
					onClick={ () => {
						onNavigateToEntityRecord( {
							postId: entity.id,
							postType: entity.type,
						} );
					} }
				>
					{ isPattern ? __( 'Edit pattern' ) : __( 'Edit template' ) }
				</MenuItem>
			</BlockSettingsMenuFirstItem>
			<Text
				variant="muted"
				as="p"
				className="editor-content-only-settings-menu__description"
			>
				{ isPattern
					? __(
							'Edit the pattern to move, delete, or make further changes to this block.'
					  )
					: __(
							'Edit the template to move, delete, or make further changes to this block.'
					  ) }
			</Text>
		</>
	);
}

function TemplateLockContentOnlyMenuItems( { clientId, onClose } ) {
	const { contentLockingParent } = useSelect(
		( select ) => {
			const { getContentLockingParent } = unlock(
				select( blockEditorStore )
			);
			return {
				contentLockingParent: getContentLockingParent( clientId ),
			};
		},
		[ clientId ]
	);
	const blockDisplayInformation =
		useBlockDisplayInformation( contentLockingParent );
	const blockEditorActions = useDispatch( blockEditorStore );
	if ( ! blockDisplayInformation?.title ) {
		return null;
	}

	const { modifyContentLockBlock } = unlock( blockEditorActions );

	return (
		<>
			<BlockSettingsMenuFirstItem>
				<MenuItem
					onClick={ () => {
						modifyContentLockBlock( contentLockingParent );
						onClose();
					} }
				>
					{ __( 'Unlock' ) }
				</MenuItem>
			</BlockSettingsMenuFirstItem>
			<Text
				variant="muted"
				as="p"
				className="editor-content-only-settings-menu__description"
			>
				{ __(
					'Temporarily unlock the parent block to edit, delete or make further changes to this block.'
				) }
			</Text>
		</>
	);
}

export default function ContentOnlySettingsMenu() {
	return (
		<BlockSettingsMenuControls>
			{ ( { selectedClientIds, onClose } ) =>
				selectedClientIds.length === 1 && (
					<ContentOnlySettingsMenuItems
						clientId={ selectedClientIds[ 0 ] }
						onClose={ onClose }
					/>
				)
			}
		</BlockSettingsMenuControls>
	);
}
