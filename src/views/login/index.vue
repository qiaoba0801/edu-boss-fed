<template>
  <div class="login">
    <div class="form-box">
      <p>Edu boss管理</p>
      <p>系统</p>
      <el-form
        label-position="top"
        class="login-form"
        ref="form"
        :model="form"
        :rules="rules"
        label-width="80px">
        <h3>登录</h3>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { login } from '@/services/user'
import { Form } from 'element-ui'

export default Vue.extend({
  name: 'loginIndex',
  data () {
    return {
      form: {
        phone: '18201288771',
        password: '111111'
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        // 表单验证
        await (this.$refs.form as Form).validate()
        // 提交表单
        const { data } = await login(this.form)
        // 处理登录错误
        if (data.state !== 1) {
          return this.$message.error(data.message)
        }
        // 处理登陆成功
        this.$router.push('/')
        this.$message.success('登陆成功')
      } catch (error) {
        this.$message.error('登录失败')
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.login{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-box p{
    display: flex;
    justify-content: center;
    margin: 0;
    font-size: 45px;
  }
  .login-form{
    background: #fff;
    padding: 20px;
    width: 300px;
    border-radius: 5px;
    margin-top: 20px;
    h3{
      margin-top: 0;
    }
  }
  .login-btn{
    width: 100%;
  }
}
</style>
