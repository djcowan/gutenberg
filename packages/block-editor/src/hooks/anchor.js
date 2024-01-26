/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';
import { PanelBody, TextControl, ExternalLink } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Platform } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { InspectorControls } from '../components';
import { useBlockEditingMode } from '../components/block-editing-mode';

/**
 * Regular expression matching invalid anchor characters for replacement.
 *
 * @type {RegExp}
 */
const ANCHOR_REGEX = /[\s#]/g;

const ANCHOR_SCHEMA = {
	type: 'string',
	source: 'attribute',
	attribute: 'id',
	selector: '*',
};

/**
 * Filters registered block settings, extending attributes with anchor using ID
 * of the first node.
 *
 * @param {Object} settings Original block settings.
 *
 * @return {Object} Filtered block settings.
 */
export function addAttribute( settings ) {
	// Allow blocks to specify their own attribute definition with default values if needed.
	if ( 'type' in ( settings.attributes?.anchor ?? {} ) ) {
		return settings;
	}
	if ( settings.supports?.anchor ) {
		// Gracefully handle if settings.attributes is undefined.
		settings.attributes = {
			...settings.attributes,
			anchor: ANCHOR_SCHEMA,
		};
	}

	return settings;
}

function BlockEditAnchorControlPure( {
	name: blockName,
	anchor,
	setAttributes,
} ) {
	const blockEditingMode = useBlockEditingMode();

	const isWeb = Platform.OS === 'web';
	const textControl = (
		<TextControl
			__nextHasNoMarginBottom
			__next40pxDefaultSize
			className="html-anchor-control"
			label={ __( 'HTML anchor' ) }
			help={
				<>
					{ __(
						'Enter a word or two — without spaces — to make a unique web address just for this block, called an “anchor.” Then, you’ll be able to link directly to this section of your page.'
					) }

					{ isWeb && (
						<ExternalLink
							href={ __(
								'https://wordpress.org/documentation/article/page-jumps/'
							) }
						>
							{ __( 'Learn more about anchors' ) }
						</ExternalLink>
					) }
				</>
			}
			value={ anchor || '' }
			placeholder={ ! isWeb ? __( 'Add an anchor' ) : null }
			onChange={ ( nextValue ) => {
				nextValue = nextValue.replace( ANCHOR_REGEX, '-' );
				setAttributes( {
					anchor: nextValue,
				} );
			} }
			autoCapitalize="none"
			autoComplete="off"
		/>
	);

	return (
		<>
			{ isWeb && blockEditingMode === 'default' && (
				<InspectorControls group="advanced">
					{ textControl }
				</InspectorControls>
			) }
			{ /*
			 * We plan to remove scoping anchors to 'core/heading' to support
			 * anchors for all eligble blocks. Additionally we plan to explore
			 * leveraging InspectorAdvancedControls instead of a custom
			 * PanelBody title. https://github.com/WordPress/gutenberg/issues/28363
			 */ }
			{ ! isWeb && blockName === 'core/heading' && (
				<InspectorControls>
					<PanelBody title={ __( 'Heading settings' ) }>
						{ textControl }
					</PanelBody>
				</InspectorControls>
			) }
		</>
	);
}

export default {
	addSaveProps,
	edit: BlockEditAnchorControlPure,
	attributeKeys: [ 'anchor' ],
	hasSupport( supports ) {
		return !! supports.anchor;
	},
};

/**
 * Override props assigned to save component to inject anchor ID, if block
 * supports anchor. This is only applied if the block's save result is an
 * element and not a markup string.
 *
 * @param {Object} extraProps Additional props applied to save element.
 * @param {Object} blockType  Block type.
 * @param {Object} attributes Current block attributes.
 *
 * @return {Object} Filtered props applied to save element.
 */
export function addSaveProps( extraProps, blockType, attributes ) {
	if ( blockType.supports?.anchor ) {
		extraProps.id = attributes.anchor === '' ? null : attributes.anchor;
	}

	return extraProps;
}

addFilter( 'blocks.registerBlockType', 'core/anchor/attribute', addAttribute );
