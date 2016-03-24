import Ember from 'ember';
import Table from 'ember-light-table';

export default Ember.Component.extend({
  items: null,
  table: null,

  columns: Ember.computed(function() {
    return [{
      label: 'Rating',
      valuePath: 'rating',
      width: '70px',
      sortable: false,
    }, {
      label: 'Category',
      valuePath: 'category',
      width: '150px'
    }, {
      label: 'Description',
      valuePath: 'descriptionLink',
    }, {
      label: 'Notes',
      valuePath: 'notes'
    }, {
      label: 'Working On',
      valuePath: 'workingOnLink'
    }];
  }),

  init() {
    this._super(...arguments);
    this.set('table', new Table(this.get('columns'), this.get('items')));
  }
});
