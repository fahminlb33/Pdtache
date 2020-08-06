var app = new Vue({
  el: '#app',
  data: {
      html_url: '',
      html_raw: '',
      view_data: '',
      pdf_list: [],

      form_disabled: false,
      refresh_disabled: false,
      table_disabled: false
  },

  methods: {
    create_pdf_store: function() {
      this.form_disabled = true;
      const data = {
        html_url: this.html_url,
        html_raw: this.html_raw,
        body: JSON.parse(this.view_data)
      };

      axios
        .post('/pdf/generate_store', data)
        .then(response => {
          this.form_disabled = false;
          Swal.fire({
            title: `Done!`,
            text: 'PDF created successfully.',
            icon: 'info',
            confirmButtonText: 'Close'
          });
          this.refresh_table();
        })
        .catch(error => {
          this.form_disabled = false;
          Swal.fire({
            title: `Can't refresh data`,
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Close'
          });
        });
    },

    create_pdf_ephemeral: function() {
      this.form_disabled = true;
      const post_data = {
        html_url: this.html_url,
        html_raw: this.html_raw,
        body: JSON.parse(this.view_data)
      };

      axios({
        url: '/pdf/generate_ephemeral',
        method: 'post',
        data: post_data,
        responseType: 'blob'
      })
      .then(response => {
        this.form_disabled = false;
        const blob = new Blob([response.data], {type: 'application/pdf'});
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      })
      .catch(error => {
        this.form_disabled = false;
        Swal.fire({
          title: `Can't refresh data`,
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'Close'
        });
      });
    },

    refresh_table: function() {
      this.refresh_disabled = true;
      axios
        .get('/pdf')
        .then(response => {
          this.refresh_disabled = false;
          this.pdf_list = response.data.data.items;
        })
        .catch(error =>  {
          this.refresh_disabled = false;
          Swal.fire({
            title: `Can't refresh data`,
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Close'
          });
        });
    },

    delete_item: function(id){
      this.refresh_disabled = true;
      this.table_disabled = true;
      axios
        .delete(`/pdf/${id}`)
        .then(response => {
          this.refresh_disabled = false;
          this.table_disabled = false;
          this.refresh_table();
        })
        .catch(error =>  {
          this.refresh_disabled = false;
          this.table_disabled = false;
          Swal.fire({
            title: `Can't refresh data`,
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Close'
          });
        });
    }
  },

  mounted() {
    this.refresh_table();
  }

});
