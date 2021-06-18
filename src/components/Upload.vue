<template>
  <v-row class=" ">
    <v-col
      cols="8"
      offset="2"
    >
      <v-form>
        <v-file-input
          class="mx-10 mt-6"
          v-model="files"
          multiple
          placeholder="Upload your documents"
          prepend-icon="mdi-file"
          :loading="loading.uploadIsLoading"
        >
          <template v-slot:selection="{ text }">
            <v-chip
              small
              label
              color="primary"
            >
              {{ text }}
            </v-chip>
            <v-spacer></v-spacer>
          </template>
        </v-file-input>
        <v-container style="height: 282px;">
          <v-row
            class="fill-height"
            justify="center"
          >
            <v-scale-transition>
              <div class="text-center">
                <v-btn
                  color="primary"
                  @click="upload"
                >Upload</v-btn>
              </div>
            </v-scale-transition>
          </v-row>
        </v-container>
      </v-form>

    </v-col>
  </v-row>
</template>
<script>
import UploadFile from '@/service/fileService';

export default {
  data: () => ({
    files: [],
    loading: {
      uploadIsLoading: false,
      uploadDialog: false,
    },
  }),
  methods: {
    upload() {
      // console.log(this.fileInfo, '文件信息');
      const formdata = new FormData();
      this.files.forEach((file) => {
        formdata.append('files', file);
      });
      UploadFile(formdata).then(() => {
      }).catch((err) => {
        console.debug(err);
      });
    },
  },
};
</script>
<style lang="">
</style>
