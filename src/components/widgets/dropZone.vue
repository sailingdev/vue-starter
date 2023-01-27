
<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzone': active }"
    class="dropzone position-relative"
  >
    <div class="mb-1">
        <i class="display-4 text-muted ri-upload-cloud-2-fill"></i>
    </div>

    <h5>Drop files here or click to upload.</h5>
    <label for="dropzoneFile" class="bg-light text-dark stretched-link">Upload</label>
   <input type="file" id="dropzoneFile" class="dropzoneFile btn btn-primary" />
  </div>
</template>


<script>
import { ref } from "vue";
export default {
  name: "dropzone",
  setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    return { active, toggleActive };
  },
};
</script>
